import React from "react";
import Ripple from "./components/Ripple";
const App =()=> {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <button className="relative overflow-hidden outline-none cursor-pointer bg-rose-500 px-12 py-2 text-white text-lg rounded-md  text-center shadow-md  h-20">
        Ripple Effect
        <Ripple color={"#fb7185"} duration={2000} />
      </button>
    </div>
  );
}

export default App;
