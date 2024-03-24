import React, { useState } from "react";
import FilterButton from "../components/FilterButton";
import Nse from "../icons/Nse";
import Back from "../icons/Back";
import Arrow from "../icons/Arrow";

const Home = () => {
  const timeRange = ["5min", "10min", "15min", "30min", "hour", "1 Day"];
  const [activeIndex, setActiveIndex] = useState(5);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const renderFilterButtons = () => {
    return timeRange.map((item, index) => (
      <FilterButton
        key={index}
        title={item}
        onClick={() => handleClick(index)}
        isActive={activeIndex === index}
      />
    ));
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="w-[70%] flex flex-col justify-center py-4">
        <div className="flex justify-center  rounded-md bg-white shadow-[0px_3px_20px_#162B740A]">
          {renderFilterButtons()}
        </div>
        <div className="flex ">
          <div className="pt-1 cursor-pointer pr-2">
            <Back height="20px" width="20px" />
          </div>
          <div className="flex flex-col">
            <div className=" flex gap-2 items-center">
              <Nse height="25px" width="25px" />
              <div className=" uppercase text-xl font-semibold">nifty 50</div>
            </div>
            <div className="flex gap-2 text-sm">
              <div>&#8377; 22096.75</div>
              <div className="flex items-center gap-1 text-xs text-[#3CBB00]">
                <Arrow /> <div>(+0.39%)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
