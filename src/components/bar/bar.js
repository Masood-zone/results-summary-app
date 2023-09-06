import React from "react";

const Bar = ({ backgroundColor, color, icon, text, score }) => {
  return (
    <div
      className="w-72 flex flex-row justify-between py-5 px-1 my-1"
      style={{
        color: `${color}`,
        // background: `${backgroundColor}`,
      }}
    >
      <div className="flex items-center">
        <span className="px-2">
          <img src={icon} alt="Icon"></img>
        </span>
        <span>{text}</span>
      </div>
      <div className="">
        <p className="text-neutral-400 font-semibold">
          <span className="text-black font-semibold">{score}</span>/100
        </p>
      </div>
    </div>
  );
};

export default Bar;
