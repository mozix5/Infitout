import React from "react";
import Icon from "../icons/Logo";
import ThunderIcon from "../icons/ThunderIcon";
const Header = () => {
  return (
    <div className="w-screen h-16 shadow-md px-32">
      <div className="flex h-full items-center justify-between">
        <div className=" flex items-center gap-2">
          <div className="text-[#0e93d1] flex gap-2 justify-center items-center">
            <Icon />
            <span className=" uppercase tracking-widest font-bold text-[14px]">
              zerodha
            </span>
          </div>
          <div className="flex flex-col my-4 border-l-2">
            <div className=" text-[7px] tracking-wider font-bold px-2 text-[#9BABC6]">
              Powered by
            </div>
            <div className="flex items-center px-1">
              <ThunderIcon />
              <span className=" text-xs font-semibold ">Streak</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="py-[8px] px-[24px] rounded-md text-sm hover:bg-[#0013]">
            Home
          </button>
          <button className="py-[8px] px-[24px] rounded-md text-sm bg-[#387ed1] text-white">
            Sign up
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
