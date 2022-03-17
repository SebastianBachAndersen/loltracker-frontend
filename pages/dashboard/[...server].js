import Head from "next/head";
import UserSearch from "../../components/userSearch";
import LpGraf from "../../components/lpGraf";
import FaveChampList from "../../components/faveCampList";
import MatchHistoryList from "../../components/matchHistroyList";
import axios from "axios";
import { useState, useEffect, useRef } from "react/cjs/react.development";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [summoner, setSummoner] = useState([]);
  const [matchHistory, setMatchHistory] = useState([]);
  const [loaded, setLoaded] = useState();
  const [error, setError] = useState();
  const serverRef = useRef(false);

  const router = useRouter();
  const { server } = router.query;

  useEffect(() => {
    if (!server) return;

    if (serverRef.current === server) return;
    axios
      .get(process.env.BASE_API_URL + `summoner/${server[0]}/${server[1]}`)
      .then((response) => {
        setSummoner(response.data.summoner);
        setMatchHistory(response.data.matchHistory);
        serverRef.current = server;
        setLoaded(true);
      })
      .catch(() => {
        setError(true);
      });
  }, [server, serverRef, summoner, loaded]);

  return (
    <div>
      <Head>
        <title>PLACEHOLDER - league tracker </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {error ? (
        <p className="text-red-600"></p>
      ) : serverRef.current === server ? (
        <div className="container mx-auto">
          <div className="grid grid-cols-2 p-5">
            <div>
              <h1 className="text-xl">{summoner?.name ?? ""}</h1>
            </div>
            <div>
              <UserSearch
                selectRegion={"ml-44"}
                inputInder={
                  "bg-primary rounded-lg w-96 h-10 text-xl text-slate-50 p-4"
                }
                searchButtonOuter={"ml-32 mt-0.5"}
                searchButtonInder={
                  "bg-blue-500 hover:bg-blue-700 px-1 py-1 text-white font-bold  rounded"
                }
              />
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
              <MatchHistoryList
                matchHistory={matchHistory}
                summoner={summoner}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex justify-center items-center">
          <p className="mx-auto">loading......</p>
        </div>
      )}
      z
    </div>
  );
}
