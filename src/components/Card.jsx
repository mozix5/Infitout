import React, { useState } from "react";
import BarChart from "./BarChart";
import Back from "../icons/Back";

export const Card = ({ filteredData, title }) => {
  const [showAllRows, setShowAllRows] = useState(false);

  const SentimentsGroup = ({ title, value }) => {
    let bgColor, textColor;

    // Define colors based on sentiment
    switch (title.toLowerCase()) {
      case "bearish":
        bgColor = "#FFE2EB";
        textColor = "#EB1D54";
        break;
      case "neutral":
        bgColor = "#E2E8F0";
        textColor = "#4A5568";
        break;
      case "bullish":
        bgColor = "#C6F6D5";
        textColor = "#38A169";
        break;
      default:
        bgColor = "#FFFFFF";
        textColor = "#000000";
    }
    return (
      <div className="flex flex-col w-20 text-sm gap-2 items-center">
        <div>{value}</div>
        <div
          className="py-1 px-2 text-center rounded-md"
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          {title}
        </div>
      </div>
    );
  };

  const IndicatorsGroup = ({ title, value }) => {
    return (
      <div className=" text-[13px] w-32">
        <div>{value}</div>
        <div className="text-[#9BABC6]">{title}</div>
      </div>
    );
  };

  const DetailedIndicators = ({ title, value }) => {
    let bgColor, textColor;

    // Define colors based on sentiment
    switch (value.position.toLowerCase()) {
      case "s":
        bgColor = "#FFE2EB";
        textColor = "#EB1D54";
        break;
      case "b":
        bgColor = "#E2E8F0";
        textColor = "#4A5568";
        break;
      case "n":
        bgColor = "#C6F6D5";
        textColor = "#38A169";
        break;
      default:
        bgColor = "#FFFFFF";
        textColor = "#000000";
    }
    return (
      <div className="flex items-center text-[13px]">
        <div
          className={`rounded-sm text-center px-2 py-1 text-[10px]`}
          style={{ background: bgColor, color: textColor }}
        >
          {value.position}
        </div>
        <div className="flex-1 pl-2 ">{title}</div>
        <div className="w-20">{value.value}</div>
      </div>
    );
  };
  return (
    <div className=" bg-white shadow-[0px_3px_20px_#162B740A] py-4 rounded-xl relative min-h-96">
      <div className=" capitalize px-4 font-semibold">{title}</div>
      <div className=" flex flex-col justify-center px-16 pt-2">
        <BarChart />
        <div>
          {filteredData.Sentiments && (
            <div className="flex justify-between px-6">
              {Object.keys(filteredData.Sentiments).map((item, index) => {
                return (
                  <SentimentsGroup
                    title={item}
                    key={index}
                    value={filteredData.Sentiments[item]}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
      {filteredData.Indicators && (
        <div className="px-16 grid grid-cols-3 place-items-center mt-10 gap-4 absolute bottom-4">
          {Object.keys(filteredData.Indicators).map((item, index) => {
            return (
              <IndicatorsGroup
                title={item}
                key={index}
                value={filteredData.Indicators[item]}
              />
            );
          })}
        </div>
      )}
      {filteredData.Indicators_detailed && (
        <div className="px-16 grid grid-flow-row gap-4 mt-10">
          {Object.keys(filteredData.Indicators_detailed)
            .slice(0, showAllRows ? undefined : 2)
            .map((item, index) => {
              return (
                <DetailedIndicators
                  title={item}
                  key={index}
                  value={filteredData.Indicators_detailed[item]}
                />
              );
            })}
          <button
            onClick={() => setShowAllRows(!showAllRows)}
            className="text-base text-[#9BABC6] place-self-end w-28 flex items-center gap-2"
          >
            {showAllRows ? "View less" : "View Details"}
            <div className={showAllRows ? "rotate-90" : "-rotate-90"}>
              <Back height="12x" width="12px" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};
