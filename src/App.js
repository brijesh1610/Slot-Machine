import logo from "./logo.svg";
import "./App.css";
import { SlotM } from "./SlotM";
function App() {
  return (
    <>
      <h1 className="heading_style">
        🎰Welcome to <span>Slot Machine Game</span>🎰
      </h1>
      <div className="slotMachine ">
        <SlotM x="🤩" y="🤩" z="🤩" />
        <hr />
        <SlotM x="😒" y="😒" z="🤩" />
        <hr />
        <SlotM x="😘" y="😘" z="😘" />
        <hr />
      </div>
    </>
  );
}

export default App;
