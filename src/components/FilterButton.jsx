import React, { useState } from "react";

const HeaderButton = ({ title, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`text-[#9BABC6] rounded-md text-sm py-2 font-semibold px-4 ${
        isActive ? "bg-[#387ed1] text-white" : "bg-transparent"
      }`}
    >
      {title}
    </button>
  );
};

export default HeaderButton;
