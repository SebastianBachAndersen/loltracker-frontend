import React from "react";
import Image from "next/image";

export default function FaveCampCard({ className }) {
  return (
    <div className="bg-pupple grid grid-cols-4 w-full text-sm rounded-md">
      <div className=" p-1 flex w-full ">
        <Image
          className="rounded-full mx-auto border-solid border-2 border-white"
          width={60}
          height={60}
          src="http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Jhin.png"
          alt="placeholder"
        />
      </div>
      <div className="grid grid-rows-2">
        <div className ="pt-2">-jhin-</div>
        <div>Cs 234</div>
      </div>
      <div className="grid grid-rows-2">
        <div className ="pt-2">kda 23.1</div>
        <div>2/3/4</div>
      </div>
      <div className="grid grid-rows-2">
        <div className ="pt-2" >50%</div>
        <div>12W/12L</div>
      </div>
    </div>
  );
}
