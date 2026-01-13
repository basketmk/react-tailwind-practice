import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const colorChange = "hover:bg-red-200 cursor-pointer transition duration-300";

  const [title, setTitle] = useState("TailWind 練習用", 0);
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 p-2 min-h-dvh">
      <div
        className={`border flex items-center justify-center col-span-2 text-5xl  ${colorChange}`}
        onClick={() => setTitle("クリックされました")}
      >
        {title}
      </div>
      <div className={`border flex items-center justify-center ${colorChange}`}>
        こんにちは
      </div>
      <div className={`border flex items-center justify-center ${colorChange}`}>
        こんにちは
      </div>
    </div>
  );
}

export default App;
