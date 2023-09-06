import React from "react";

const Bar = ({ backgroundColor, color, icon, text, score }) => {
  return (
    <div
      className="w-72 flex flex-row justify-between py-4 rounded-lg px-1 mt-4 max-sm:w-[255px] max-md:w-[300px] max-sm:px-0 max-md:px-0"
      style={{
        color: `${color}`,
        background: `${backgroundColor}`,
      }}
    >
      <div className="flex items-center">
        <span className="px-2">
          <img src={icon} alt="Icon"></img>
        </span>
        <span>{text}</span>
      </div>
      <div className="px-2">
        <p className="text-neutral-400 font-semibold">
          <span className="text-black font-bold text-base">{score}</span> / 100
        </p>
      </div>
    </div>
  );
};

export default Bar;
