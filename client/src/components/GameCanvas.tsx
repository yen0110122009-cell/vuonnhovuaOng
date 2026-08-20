// Style reminder: Nắng Trên Luống Đất — bố cục bất đối xứng, giấy ghi chú, màu Clay Sprout #C9784B.
import { useEffect, useMemo, useRef, useState } from "react";
import { Engine } from "@babylonjs/core/Engines/engine";
import { createGameScene } from "@/game/scene";
import { Leaf, Droplets, Heart, Sun, Sprout, Shovel, Hand, Sparkles, Cat, Rabbit, RotateCcw } from "lucide-react";
import { toast } from "sonner";

const logoUrl = "/manus-storage/vuon-nho-logo_98aa6ada.png";

type PlotState = "empty" | "sprout" | "growing" | "ready";
type Plot = { state: PlotState; plant: string; progress: number };

const initialPlots: Plot[] = [
  { state: "ready", plant: "Cà chua bi", progress: 100 },
  { state: "growing", plant: "Húng quế", progress: 68 },
  { state: "sprout", plant: "Hoa cúc", progress: 28 },
  { state: "empty", plant: "", progress: 0 },
];

const stageCopy: Record<PlotState, string> = { empty: "Luống trống", sprout: "Mầm non", growing: "Đang lớn", ready: "Thu hoạch" };

export default function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const startedRef = useRef(false);
  const [plots, setPlots] = useState(initialPlots);
  const [water, setWater] = useState(6);
  const [leaves, setLeaves] = useState(24);
  const [selectedPlot, setSelectedPlot] = useState(0);
  const [selectedPet, setSelectedPet] = useState<"Miu" | "Bông">("Miu");
  const [petMood, setPetMood] = useState(82);
  const [day, setDay] = useState(7);
  const [message, setMessage] = useState("Nắng vừa đủ cho một ngày xanh.");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || startedRef.current) return;
    startedRef.current = true;
    const engine = new Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true, adaptToDeviceRatio: true });
    let disposed = false;
    createGameScene(engine, canvas).then(({ scene, dispose }) => {
      if (disposed) return;
      engine.runRenderLoop(() => scene.render());
      const onResize = () => engine.resize();
      window.addEventListener("resize", onResize);
      (engine as Engine & { __cleanup?: () => void }).__cleanup = () => { window.removeEventListener("resize", onResize); dispose(); };
    });
    return () => {
      disposed = true;
      (engine as Engine & { __cleanup?: () => void }).__cleanup?.();
      engine.dispose();
      startedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).has("demo")) {
      setMessage("Một ngày mới, vài mầm cây đang chờ bạn.");
      setSelectedPlot(3);
    }
  }, []);

  const completed = useMemo(() => plots.filter((plot) => plot.state === "ready").length, [plots]);

  const plant = () => {
    setPlots((current) => current.map((plot, index) => index === selectedPlot && plot.state === "empty" ? { state: "sprout", plant: "Hướng dương", progress: 12 } : plot));
    setMessage("Một hạt giống nhỏ đã nằm yên trong đất.");
    toast("Đã gieo một hạt giống", { description: "Chỉ cần một chút nước và thời gian." });
  };

  const waterPlot = () => {
    if (!water) { toast("Bình tưới đang trống", { description: "Hãy nghỉ một lát, nước sẽ đầy lại vào ngày mai." }); return; }
    setWater((value) => value - 1);
    setPlots((current) => current.map((plot, index) => index === selectedPlot && plot.state !== "empty" ? { ...plot, state: plot.progress >= 68 ? "ready" : "growing", progress: Math.min(100, plot.progress + 18) } : plot));
    setMessage("Từng giọt nước làm khu vườn thức dậy.");
  };

  const harvest = () => {
    if (plots[selectedPlot].state !== "ready") { toast("Cây vẫn đang lớn", { description: "Bạn có thể tưới thêm để giúp cây nhanh hơn." }); return; }
    setLeaves((value) => value + 8);
    setPlots((current) => current.map((plot, index) => index === selectedPlot ? { state: "empty", plant: "", progress: 0 } : plot));
    setMessage("Một mùa nhỏ đã hoàn thành. Lá mới lại có thể bắt đầu.");
  };

  const pet = () => {
    setPetMood((value) => Math.min(100, value + 7));
    setMessage(`${selectedPet} khẽ dụi đầu vào tay bạn.`);
    toast(`Đã vuốt ve ${selectedPet}`, { description: "Niềm vui +7" });
  };

  const nextDay = () => {
    setDay((value) => value + 1); setWater(6); setPetMood((value) => Math.max(65, value - 2));
    setPlots((current) => current.map((plot) => plot.state === "sprout" ? { ...plot, state: "growing", progress: plot.progress + 18 } : plot));
    setMessage("Bình minh mới ghé qua khu vườn.");
  };

  return (
    <main className="garden-shell">
      <canvas ref={canvasRef} className="garden-canvas" aria-hidden="true" />
      <div className="garden-art" aria-hidden="true" />
      <header className="topbar">
        <div className="brand-lockup"><span className="brand-mark"><img src={logoUrl} alt="" onError={(event) => { event.currentTarget.style.display = "none"; }} /><span className="brand-mark-fallback">⌁</span></span><div><p className="eyebrow">NHẬT KÝ VƯỜN</p><h1>Vườn Nhỏ <em>Chill</em></h1></div></div>
        <div className="day-card"><Sun size={16} /><span>Ngày {day}</span><button onClick={nextDay} aria-label="Sang ngày mới"><RotateCcw size={14} /></button></div>
      </header>

      <section className="game-layout">
        <div className="playfield" aria-label="Khu vườn tương tác">
          <div className="welcome-note"><Sparkles size={15} /><span>{message}</span></div>
          <div className="plots-row">
            {plots.map((plot, index) => (
              <button key={index} className={`plot plot-${plot.state} ${selectedPlot === index ? "is-selected" : ""}`} onClick={() => setSelectedPlot(index)} aria-label={`Luống ${index + 1}: ${stageCopy[plot.state]}`}>
                <span className="plot-soil" />
                {plot.state !== "empty" && <span className={`plant-illustration plant-${plot.state}`}>{plot.state === "ready" ? "🍅" : plot.state === "growing" ? "🌿" : "🌱"}</span>}
                <span className="plot-label">{plot.state === "empty" ? "Gieo hạt" : stageCopy[plot.state]}</span>
                {plot.state !== "empty" && <span className="plot-progress"><span style={{ width: `${plot.progress}%` }} /></span>}
              </button>
            ))}
          </div>
          <div className="garden-pets" aria-label="Hai người bạn trong vườn">
            <button className={`pet-hotspot cat-hotspot ${selectedPet === "Miu" ? "pet-selected" : ""}`} onClick={() => setSelectedPet("Miu")} aria-label="Chọn Miu"><span className="pet-emoji"><Cat size={25} /></span><b>Miu</b></button>
            <button className={`pet-hotspot rabbit-hotspot ${selectedPet === "Bông" ? "pet-selected" : ""}`} onClick={() => setSelectedPet("Bông")} aria-label="Chọn Bông"><span className="pet-emoji"><Rabbit size={25} /></span><b>Bông</b></button>
          </div>
          <div className="floating-leaf leaf-one">✦</div><div className="floating-leaf leaf-two">✦</div>
        </div>

        <aside className="side-panel">
          <div className="note-sheet mission-sheet"><div className="pin" /><p className="eyebrow">MỤC TIÊU HÔM NAY</p><h2>Chạm đất, chạm vui.</h2><p className="soft-copy">Chăm một luống cây và dành một cái vuốt ve cho người bạn nhỏ.</p><div className="mission-progress"><span style={{ width: `${Math.min(100, completed * 40 + (petMood > 80 ? 20 : 0))}%` }} /></div><div className="mission-meta"><span>{completed}/2 việc đã xong</span><Leaf size={15} /></div></div>
          <div className="note-sheet pet-sheet"><div className="pet-heading"><div><p className="eyebrow">BẠN ĐỒNG HÀNH</p><h2>{selectedPet}</h2></div><Heart size={19} fill="currentColor" /></div><p className="soft-copy">Đang ngồi dưới bóng cây, chờ bạn để ý.</p><div className="stat-line"><span>Vui vẻ</span><strong>{petMood}%</strong></div><div className="stat-bar"><span style={{ width: `${petMood}%` }} /></div><button className="soft-button" onClick={pet}><Hand size={16} /> Vuốt ve một chút</button></div>
          <div className="resource-strip"><div><Droplets size={15} /><span>Nước</span><strong>{water}</strong></div><div><Leaf size={15} /><span>Lá</span><strong>{leaves}</strong></div></div>
        </aside>
      </section>

      <nav className="tool-drawer" aria-label="Dụng cụ làm vườn"><div className="tool-intro"><Shovel size={19} /><span>Hôm nay làm gì?</span></div><button className="tool-button" onClick={plant}><span className="tool-icon">🌰</span><span>Gieo hạt</span><small>Ô trống</small></button><button className="tool-button" onClick={waterPlot}><span className="tool-icon">💧</span><span>Tưới cây</span><small>{water} giọt còn lại</small></button><button className="tool-button" onClick={harvest}><span className="tool-icon">🧺</span><span>Thu hoạch</span><small>Luống đã chín</small></button><div className="tool-tip"><Sprout size={17} /><span>Chậm lại một nhịp.<br /><b>Mầm cây sẽ lo phần còn lại.</b></span></div></nav>
    </main>
  );
}
