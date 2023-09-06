import React from "react";

const BlueCard = ({ heading, children, background }) => {
  return (
    <div className="max-w-[350px] rounded-3xl bg-gradient-to-b from-[#6843FE] to-[#4936F2] px-5 py-10 flex flex-col items-center text-center max-md:rounded-t-none max-md:py-1 max-md:h-[390px]">
      <h1 className="text-2xl mb-2 font-medium ash-text">{heading}</h1>
      {children}
    </div>
  );
};

export default BlueCard;
