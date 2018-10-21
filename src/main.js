import TurntableCanvas from "./TurntableCanvas";
import bg from "./bg.png";

let turntableCanvas;
window.onload = () => {
  turntableCanvas = new TurntableCanvas(bg);
  turntableCanvas.test();
};



