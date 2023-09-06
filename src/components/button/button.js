import React from "react";

const Button = ({ title }) => {
  return (
    <button className="bg-neutral-800 text-white text-center font-medium w-full py-3 px-16 rounded-3xl mx-auto my-3 hover:bg-blue-600 transition duration-200">
      {title}
    </button>
  );
};

export default Button;
