import React from "react";
import SelectRegion from "./selectRegion";
import Search from "../assets/images/icons/search";
import { useRouter } from "next/router";
import { useState } from "react";

export default function UserSearch({
  selectRegion,
  inputOuter,
  inputInder,
  searchButtonOuter,
  searchButtonInder,
  className
}) {
  const [search, setSearch] = useState("");
  const [server, setServer] = useState("euw");
  const router = useRouter();
  const handlingSearch = (e) => {
    e.preventDefault();
    if (search == "") {
      return;
    }
    router.push(`/dashboard/${server}/${search}`);
  };
  return (
    <div>
      <form className={className}>
        <div className={selectRegion}>
          <SelectRegion value={server} onChange={setServer} />
        </div>
        <div className={inputOuter}>
          <input
            className={inputInder}
            type="search"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="search"
            placeholder="Search"
          ></input>
        </div>
        <div className={searchButtonOuter}>
          <button
            onClick={(e) => handlingSearch(e)}
            type="submit"
            className={searchButtonInder}
          >
            <Search width={50} height={30} />
          </button>
        </div>
      </form>
    </div>
  );
}
