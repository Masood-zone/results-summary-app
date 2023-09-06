import React from "react";

const SummaryCard = ({ title, children }) => {
  return (
    <div className="max-w-full px-5 py-5">
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      {children}
    </div>
  );
};

export default SummaryCard;
