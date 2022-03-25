import React from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import summonerSpells from "../assets/staticData/summonerSpells.json";
import { Disclosure } from "@headlessui/react";
import GameDetails from "./GameDetails";
import { useState } from "react";
import Items from "./Items";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import queues from "../assets/staticData/queues.json";
export default function MatchHistoryCard({
  className,
  match,
  summoner,
  server
}) {
  const currentUserObj =
    match.details.info.participants[
      match.details.metadata.participants.indexOf(summoner.puuid)
    ];
  var team1 = match.details.info.participants.slice(0, 5);
  var team2 = match.details.info.participants.slice(5, 10);
  const items = [
    currentUserObj.item0,
    currentUserObj.item1,
    currentUserObj.item2,
    currentUserObj.item6,
    currentUserObj.item3,
    currentUserObj.item4,
    currentUserObj.item5,
    0
  ];
  var topDmg = Math.max.apply(
    Math,
    match.details.info.participants.map(function (o) {
      return o.totalDamageDealtToChampions;
    })
  );
  return (
    <div className="md:p-4 pt-4">
      <Disclosure>
        <div
          className={`rounded-md ${
            currentUserObj?.win ?? false ? "bg-BlueGray" : "bg-RedGray"
          }`}
        >
          <div className=" border-indigo-600 grid grid-cols-[min-content_min-content_minmax(90px,1fr)_minmax(40px,1fr)_minmax(40px,1fr)_min-content] md:grid-cols-[min-content_min-content_min-content_minmax(40px,1fr)_minmax(40px,1fr)_1fr_1fr_min-content] p-1 gap-2 md:gap-2 text-xs items-center text-center lg:px-2">
            <div className="grid grid-rows-[min-content_1fr] ">
              <p className="pb-2">{moment(match.match_created_at).fromNow()}</p>
              <div className="h-[60px] w-[60px] md:h-[100px] md:w-[100px]">
                <Image
                  priority={true}
                  className="rounded-full mx-auto border-solid border-2 border-white"
                  width={100}
                  height={100}
                  src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${currentUserObj.championName}.png`}
                  alt="placeholder"
                />
              </div>
            </div>
            <div className="grid items-center grid-rows-2">
              <Image
                priority={true}
                className="mx-auto border-solid border-2 border-white"
                width={25}
                height={25}
                layout="fixed"
                src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/${
                  summonerSpells[currentUserObj.summoner1Id].key
                }.png`}
                alt="placeholder"
              />
              <Image
                priority={true}
                className="mx-auto border-solid border-2 border-white"
                width={25}
                height={25}
                layout="fixed"
                src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/${
                  summonerSpells[currentUserObj.summoner2Id].key
                }.png`}
                alt="placeholder"
              />
            </div>
            <div className="hidden md:block">
              <Items className="grid grid-cols-4 w-36" items={items} />
            </div>
            <div className="grid grid-rows-2 justify-center gap-5 ">
              <p className="">
                {
                  queues.filter((obj) => {
                    return obj.queueId == match.details.info.queueId;
                  })[0].description
                }
              </p>
              <div
                className={`${
                  currentUserObj?.win ?? false ? "text-green-50" : "text-red-50"
                }`}
              >
                <p className="">
                  {currentUserObj?.win ?? false ? "Win" : "Lose"}
                </p>
                <p className="">
                  {moment
                    .utc(match.details.info.gameDuration * 1000)
                    .format("mm:ss")}
                </p>
              </div>
            </div>

            <div className="grid grid-rows-2 justify-center gap-5 ">
              <div>{currentUserObj.championName}</div>
              <div>Cs: {currentUserObj.totalMinionsKilled}</div>
            </div>
            <div className="grid grid-rows-2 justify-center gap-5 ">
              <div>
                KDA: {Number(currentUserObj.challenges?.kda.toFixed(2))}
              </div>
              <div>
                {currentUserObj.kills} / {currentUserObj.deaths} /
                {currentUserObj.assists}
              </div>
            </div>
            <div className="hidden xl:block">
              <div className="  grid grid-rows-5 grid-flow-col">
                {match.details.info.participants.map(function (player, i) {
                  return (
                    <div key={i} className="cursor-pointer">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={`/dashboard/${server}/${player.summonerName}`}
                      >
                        <div className="flex gap-2 text-left min-w-full">
                          <div className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]">
                            <Image
                              priority={true}
                              className=" mx-auto border-solid border-2 border-white"
                              width={30}
                              height={30}
                              src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${player.championName}.png`}
                              alt="placeholder"
                            />
                          </div>
                          <div>
                            <p className="">
                              {truncateString(player.summonerName, 12)}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <Disclosure.Button className="py-2">
                <ArrowDropDownIcon>name_of_the_icon</ArrowDropDownIcon>
              </Disclosure.Button>
            </div>
          </div>
        </div>
        <div className="px-2 ">
          <Disclosure.Panel
            className={`pt-1 ${
              currentUserObj?.win ?? false ? "bg-BlueGray" : "bg-RedGray"
            }`}
          >
            <div className="">
              <GameDetails
                topDmg={topDmg}
                match={team1}
                server={server}
                summonerId={summoner.puuid}
              ></GameDetails>
            </div>
            <div>
              <GameDetails
                topDmg={topDmg}
                match={team2}
                server={server}
                summonerId={summoner.puuid}
              ></GameDetails>
            </div>
          </Disclosure.Panel>
        </div>
      </Disclosure>
    </div>
  );
}
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
