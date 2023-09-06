import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[700px] h-[440px] shadow-xl rounded-lg mx-auto my-10  flex flex-row">
      {children}
    </div>
  );
};

export default Container;
