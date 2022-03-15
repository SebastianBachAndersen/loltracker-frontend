import React from "react";
import SelectRegion from "./selectRegion";
import Search from "../images/icons/search";

export default function userSearch({selectRegion, inputOuter, inputInder, searchButtonOuter, searchButtonInder }) {
  return (
      <div className="grid grid-cols-3">
        <div className={selectRegion}>
          <SelectRegion />
        </div>
        <div className={inputOuter}>
          <input
            className={inputInder}
            type="search"
            name="search"
            id="search"
            placeholder="Search"
          ></input>
        </div>
        <div className={searchButtonOuter}>
          <button
            type="submit"
            className={searchButtonInder}
          >
            <Search width={50} height={30} />
          </button>
        </div>
      </div>
  );
}
