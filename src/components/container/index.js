import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[700px] h-[440px] shadow-xl rounded-lg mx-auto my-10 flex flex-row max-md:flex-col max-md:max-w-[350px] max-md:h-[790px] max-md:my-0 max-md:rounded-t-none max-sm:max-w-[280px]">
      {children}
    </div>
  );
};

export default Container;
