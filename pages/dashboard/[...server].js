import Head from "next/head";
import UserSearch from "../../components/userSearch";
import LpGraf from "../../components/lpGraf";
import FaveChampList from "../../components/faveCampList";
import MatchHistoryList from "../../components/matchHistroyList";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
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
        <div className="container px-5 mx-auto">
          <div className="grid grid-cols-1 py-4 lg:grid-cols-3">
            <h1 className="text-xl">{summoner?.name ?? ""}</h1>
            <div className="col-span-2 ">
              <UserSearch
                selectRegion={""}
                inputInder={"bg-primary rounded-lg h-10 text-xl p-4"}
                searchButtonOuter={" "}
                searchButtonInder={
                  "bg-blue-500 hover:bg-blue-700 px-1 py-1 text-white font-bold  rounded"
                }
                className={"flex flex-row justify-end"}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
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
            <div className="bg-primary lg:col-span-3 rounded-md">
              <MatchHistoryList
                matchHistory={matchHistory}
                summoner={summoner}
                server={server[0]}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex justify-center items-center">
          <p className="mx-auto">
            JEG ARBEJDER LIGESOM!!!!!! 😡😡😠😠😡😠😡😡😠😡😠!!!!
          </p>
        </div>
      )}
    </div>
  );
}
