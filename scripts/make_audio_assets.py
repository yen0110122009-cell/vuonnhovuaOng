import math
import random
import wave
from pathlib import Path

SR = 22050
OUT = Path('/home/ubuntu/webdev-static-assets')
OUT.mkdir(parents=True, exist_ok=True)


def write_wav(path: Path, samples):
    peak = max(1e-9, max(abs(x) for x in samples))
    with wave.open(str(path), 'wb') as f:
        f.setnchannels(1)
        f.setsampwidth(2)
        f.setframerate(SR)
        frames = bytearray()
        for value in samples:
            sample = max(-1, min(1, value / peak * 0.72))
            frames += int(sample * 32767).to_bytes(2, 'little', signed=True)
        f.writeframes(frames)


random.seed(23)
# Gentle 8-second wing ambience: low-passed noise with slow flutter pulses.
seconds = 8
wing = []
low = 0.0
for i in range(SR * seconds):
    t = i / SR
    white = random.uniform(-1, 1)
    low += (white - low) * 0.035
    pulse = 0.25 + 0.75 * (0.5 + 0.5 * math.sin(2 * math.pi * 7.2 * t))
    breath = 0.55 + 0.45 * math.sin(2 * math.pi * 0.19 * t)
    wing.append((low * 0.72 + white * 0.08) * pulse * breath)
write_wav(OUT / 'vuon-nho-bee-wings.wav', wing)

# 48-second original lo-fi focus loop with soft chord pads and filtered texture.
seconds = 48
bpm = 72
beat = 60 / bpm
chords = [(261.63, 329.63, 392.00), (220.00, 277.18, 329.63), (246.94, 311.13, 369.99), (196.00, 246.94, 293.66)]
lofi = []
noise_state = 0.0
for i in range(SR * seconds):
    t = i / SR
    bar = int(t / (beat * 4)) % len(chords)
    chord = chords[bar]
    pad = sum(math.sin(2 * math.pi * freq * t) for freq in chord) / 3
    pad *= 0.12 * (0.72 + 0.28 * math.sin(2 * math.pi * 0.08 * t))
    bass = math.sin(2 * math.pi * (chord[0] / 2) * t) * 0.07
    pulse = math.exp(-((t % beat) / 0.16) * 3.2) * 0.045
    texture = random.uniform(-1, 1)
    noise_state += (texture - noise_state) * 0.025
    hiss = noise_state * 0.018
    lofi.append(pad + bass + pulse + hiss)
# short fade at seam to avoid clicks
fade = int(SR * 0.08)
for i in range(fade):
    lofi[i] *= i / fade
    lofi[-i - 1] *= i / fade
write_wav(OUT / 'vuon-nho-lofi-focus.wav', lofi)
print('created', OUT / 'vuon-nho-bee-wings.wav', OUT / 'vuon-nho-lofi-focus.wav')
