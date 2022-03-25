import React from "react";
import Image from "next/image";

export default function FaveCampCard({ className, champData }) {
  console.log(champData);
  return (
    <div className="bg-pupple grid grid-cols-4 w-full text-sm rounded-md">
      <div className=" p-1 flex w-full ">
        <Image
          priority={true}
          className="rounded-full mx-auto border-solid border-2 border-white"
          width={60}
          height={60}
          src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${champData.championNameId}.png`}
          alt="placeholder"
        />
      </div>
      <div className="grid grid-rows-2">
        <div className="pt-2">{champData.championName}</div>
        <div>Cs: {champData.average.cs}</div>
      </div>
      <div className="grid grid-rows-2">
        <div className="pt-2">KDA: {champData.kda}</div>
        <div>
          {champData.average.kills}/{champData.average.deaths}/
          {champData.average.assits}
        </div>
      </div>
      <div className="grid grid-rows-2">
        <div className="pt-2">{champData.winRate}%</div>
        <div>
          {champData.wins}W/{champData.losses}L
        </div>
      </div>
    </div>
  );
}
