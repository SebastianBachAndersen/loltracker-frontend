import React from "react";
import FaveChampCard from "./faveChampCard";

export default function FaveCampList({ className, championStats }) {
  return (
    <div className="p-1 md:p-4">
      <h2 className="text-center pb-2">Champion Statistics</h2>
      {championStats.map((champData, i) => {
        return (
          <div key={i} className="pt-1">
            <div>
              <FaveChampCard champData={champData} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
