import React from "react";

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-center w-full max-w-4xl px-4 py-2 mt-2.5 mx-auto overflow-hidden  border border-[#1f7e2c] shadow-cyan-500/50 rounded-2xl">
      <div className="absolute top-0 left-0 w-full h-3/5 bg-gradient-to-b from-white/15 to-transparent z-0"></div>

      <div
        className="absolute top-0 left-0 w-full h-full animate-flicker opacity-50 z-0"
        style={{ backgroundRepeat: "repeat" }}
      ></div>

      {/* Title Text */}
      <div className="relative z-10 text-3xl  uppercase text-emerald-50 text-shadow-lg  font-vt323">
        PERSONAL TERMINAL
      </div>
    </nav>
  );
};

export default Navbar;
