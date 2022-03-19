import Head from "next/head";
import UserSearch from "../../components/userSearch";
import LpGraf from "../../components/lpGraf";
import FaveChampList from "../../components/faveCampList";
import MatchHistoryList from "../../components/matchHistroyList";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Meta from "../../components/meta";

export async function getServerSideProps(context) {
  // Fetch data from external API
  const { server } = context.query;
  console.log(process.env.BACKEND_API_URL);
  const res = await fetch(
    process.env.BACKEND_API_URL + `summoner/${server[0]}/${server[1]}`
  );
  const data = await res.json();
  data.server = server[0];
  // Pass data to the page via props
  return { props: { data } };
}

function Dashboard({ data }) {
  return (
    <div>
      <Meta
        title={`${data.summoner.name} - Lol Tracker - Ranked`}
        desc={`${data.summoner.name}`}
        image={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${data.summoner.profileIconId}.jpg`}
      />
      <p className="text-red-600"></p>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 p-5">
          <div>
            <h1 className="text-xl">{data.summoner.name}</h1>
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
              matchHistory={data.matchHistory}
              summoner={data.summoner}
              server={data.server}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
