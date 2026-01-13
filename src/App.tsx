import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const baseBox = "border flex items-center justify-center cursor-pointer ";

  const hoverRed = "hover:bg-red-200 transition-all duration-300";
  const hoverCyan = "hover:bg-cyan-200 transition-all duration-300";
  const hoverLime = "hover:bg-lime-200 transition-all duration-300";

  const [title, setTitle] = useState("TailWind 練習用", 0);
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 p-2 min-h-dvh">
      <div
        className={`${baseBox} ${hoverRed} col-span-2 text-5xl `}
        onClick={() => setTitle("クリックされました")}
      >
        {title}
      </div>
      <div className={`${baseBox} ${hoverCyan}`}>こんにちは</div>
      <div className={`${baseBox} ${hoverLime}`}>こんにちは</div>
    </div>
  );
}

export default App;
