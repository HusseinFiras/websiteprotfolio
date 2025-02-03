import React from "react";

const produceSpans = (text, isGlitch = false) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-bottom ${
        isGlitch ? "glitch-text random-uppercase" : ""
      }`}
      data-text={letter} // Ensure data-text is applied for all letters
      style={{
        animationDelay: `${Math.random() * 2}s`, // Add randomness to each letter
      }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};


const Position = () => {
  return (
    <div className="relative cursor-default font-medium text-white text-[30px] xs:text-[20px] sm:text-[30px] md:text-[60px] 2xl:text-[66px] leading-[32px] 2xl:leading-[40px] w-full flex justify-center items-center">
      <div className="absolute inset-0 top-[-10px] sm:top-[-10px] lg:top-0 flex flex-col">
        {/* Glitch Effect on IT Engineer */}
        <div
          className="text first absolute left-[18%] xs:left-1 md:left-2 2xl:left-4 flex"
          aria-label="IT Engineer"
        >
          {produceSpans("IT Engineer", true)}
        </div>
      </div>
    </div>
  );
};

export default Position;
