import React from "react";
import SelectRegion from "./selectRegion";
import Search from "../images/icons/search";
import { useRouter } from "next/router";
import { useState } from "react/cjs/react.development";

export default function userSearch({
  selectRegion,
  inputOuter,
  inputInder,
  searchButtonOuter,
  searchButtonInder
}) {
  const [search, setSearch] = useState("")
  const [server, setServer] = useState("br")
  const router = useRouter()
  const handlingSearch = (e) => {
    e.preventDefault()
    if(search == ""){
      return
    }
    router.push(`/${server}/${search}`)
  }
  console.log(search +" - "+ server)
  return (
    <div className="grid grid-cols-3">
          <div className={selectRegion}>
            <SelectRegion value={server} onChange={setServer}/>
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
            <button onClick={(e) => handlingSearch(e)} type="submit" className={searchButtonInder}>
              <Search width={50} height={30} />
            </button>
          </div>
    </div>
  );
}
