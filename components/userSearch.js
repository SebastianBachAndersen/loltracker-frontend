import React from "react";
import SelectRegion from "./selectRegion";
import Search from "../images/icons/search";

export default function userSearch({selectRegion, input, searchButton }) {
  return (
      <div className="grid grid-cols-3">
        <div className={selectRegion}>
          <SelectRegion />
        </div>
        <div className={input}>
          <input
            className="bg-primary rounded-lg w-96 h-10 text-xl text-slate-50 p-4"
            type="search"
            name="search"
            id="search"
            placeholder="Search"
          ></input>
        </div>
        <div className={searchButton}>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 px-1 py-1 text-white font-bold  rounded"
          >
            <Search width={50} height={30} />
          </button>
        </div>
      </div>
  );
}
