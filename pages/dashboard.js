import Head from "next/head";
import UserSearch from "../components/userSearch";
import LpGraf from "../components/lpGraf";
import FaveChampList from "../components/faveCampList";
import MatchHistoryList from "../components/matchHistroyList";
import axios from "axios";
import { useState, useEffect } from "react/cjs/react.development";

export default function Dashboard() {
  const [response, setResponse] = useState("");
  const [summoner, setSummoner] = useState([]);
  const [matchHistory, setMatchHistory] = useState([]);

  const [dataFetched, setDataFetched] = useState(false);
  useEffect(() => {
    if (dataFetched == true) return;
    axios
      .get(process.env.BASE_API_URL + "summoner/euw/sex%20med%20mænd")
      .then((response) => {
        setResponse(response);
        setSummoner(response.data.summoner);
        setMatchHistory(response.data.matchHistory);
        setDataFetched(true);
      });
  }, [dataFetched]);

  return (
    <div>
      <Head>
        <title>PLACEHOLDER - league tracker </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 p-5">
          <div>
            <h1 className="text-xl">{summoner?.name ?? ""}</h1>
          </div>
          <div >
            <UserSearch selectRegion={"ml-44"} inputInder={"bg-primary rounded-lg w-96 h-10 text-xl text-slate-50 p-4"} searchButtonOuter={"ml-32 mt-0.5"} searchButtonInder={"bg-blue-500 hover:bg-blue-700 px-1 py-1 text-white font-bold  rounded"} />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5">
          <div>
            <div className="grid grid-rows-2 gap-5">
              <div className="bg-primary rounded-md">
                <LpGraf />
              </div>
              <div className="bg-primary rounded-md">
                <FaveChampList />
              </div>
            </div>
          </div>
          <div className="bg-primary  col-span-3 rounded-md">
            <MatchHistoryList matchHistory={matchHistory} summoner={summoner} />
          </div>
        </div>
      </div>
    </div>
  );
}
