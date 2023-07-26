import React from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div className="hero-container flex flex-col justify-center items-center relative">
      <div className="absolute text-center z-10 text-white">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl">
          Welcome to VietNam
        </h1>
        <p className="typewriter font-bold tracking-wider text-xl lg:text-2xl pt-4 drop-shadow-2xl shadow-black">
          <Typewriter
            options={{
              strings: ["A Beautiful Country and Friendly People"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
    </div>
  );
}

export default Hero;
