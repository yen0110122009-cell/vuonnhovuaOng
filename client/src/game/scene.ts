// Style reminder: Nắng Trên Luống Đất — canvas là lớp giấy nền dịu, không cạnh tranh với UI thủ công.
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { Engine } from "@babylonjs/core/Engines/engine";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Color3 } from "@babylonjs/core/Maths/math.color";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Scene } from "@babylonjs/core/scene";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";

export type GameHandle = { scene: Scene; dispose: () => void };

export async function createGameScene(engine: Engine, _canvas: HTMLCanvasElement): Promise<GameHandle> {
  const scene = new Scene(engine);
  scene.clearColor = new Color3(0.94, 0.91, 0.82).toColor4(1);
  const camera = new ArcRotateCamera("camera", -Math.PI / 2, 1.35, 12, new Vector3(0, 0, 0), scene);
  camera.attachControl(_canvas, false);
  camera.lowerRadiusLimit = 12;
  camera.upperRadiusLimit = 12;
  camera.inputs.clear();

  const light = new HemisphericLight("warm-sun", new Vector3(0, 1, 0), scene);
  light.intensity = 0.9;
  light.diffuse = new Color3(1, 0.87, 0.68);
  light.groundColor = new Color3(0.55, 0.68, 0.48);

  const ground = MeshBuilder.CreateGround("paper-ground", { width: 20, height: 14 }, scene);
  const material = new StandardMaterial("paper", scene);
  material.diffuseColor = new Color3(0.86, 0.79, 0.64);
  material.specularColor = new Color3(0, 0, 0);
  ground.material = material;
  ground.position.y = -0.4;

  return { scene, dispose: () => scene.dispose() };
}
