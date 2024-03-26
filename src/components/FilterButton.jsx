import React, { useState } from "react";

const HeaderButton = ({ title, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`text-[#9BABC6] rounded-md text-sm md:py-2 font-semibold md:px-4 px-3 py-1 ${
        isActive ? "bg-[#387ed1] text-white" : "bg-transparent"
      }`}
    >
      {title}
    </button>
  );
};

export default HeaderButton;
