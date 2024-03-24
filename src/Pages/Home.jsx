import React, { useState } from "react";
import FilterButton from "../components/FilterButton";

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
      <div className="w-[80%] flex justify-center py-4">
        <div className="flex justify-center  rounded-md bg-white shadow-[0px_3px_20px_#162B740A]">
          {renderFilterButtons()}
        </div>
      </div>
    </div>
  );
};

export default Home;
