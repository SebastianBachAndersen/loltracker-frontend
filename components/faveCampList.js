import React from "react";
import FaveChampCard from "./faveChampCard";


export default function FaveCampList({ className }) {
  return (
    <div className="p-4">
      <h2 className="text-center pb-2">Champion Statistics</h2>
      <div className="">
        <FaveChampCard/>
      </div>
    </div>
  );
}