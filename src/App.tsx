import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 p-4 min-h-dvh">
      <div className="border flex items-center justify-center col-span-2">
        こんにちは
      </div>
      <div className="border flex items-center justify-center">こんにちは</div>
      <div className="border flex items-center justify-center">こんにちは</div>
      <div className="border flex items-center justify-center">こんにちは</div>
    </div>
  );
}

export default App;
