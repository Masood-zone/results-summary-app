import React from "react";

const ScoreBoard = ({ score }) => {
  return (
    <div className="w-[50%] py-12 text-center rounded-full bg-gradient-to-b from-[#4925CF] to-[#4532E6] mt-3">
      <span className="text-white font-bold text-4xl">{score}</span>
      <p className="text-neutral-400">of 100</p>
    </div>
  );
};

export default ScoreBoard;
