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
    <div className="p-4 pt-4">
      <Disclosure>
        <div
          className={`bg-secondary rounded-md border-solid border-2 ${
            currentUserObj?.win ?? false ? "border-green-600" : "border-red-600"
          }`}
        >
          <div className=" border-indigo-600 grid grid-cols-[min-content_min-content_110px_1fr_1fr_min-content] gap-5 text-xs items-center text-center lg:px-5">
            <div>
              <div className="p-1 flex gap-2">
                <div className="h-[100px] w-[100px]">
                  <Image
                    className="rounded-full mx-auto border-solid border-2 border-white"
                    width={100}
                    height={100}
                    src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${currentUserObj.championName}.png`}
                    alt="placeholder"
                  />
                </div>
                <div className="grid items-center grid-rows-2">
                  <Image
                    className="mx-auto  border-solid border-2 border-white"
                    width={25}
                    height={25}
                    layout="fixed"
                    src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/${
                      summonerSpells[currentUserObj.summoner1Id].key
                    }.png`}
                    alt="placeholder"
                  />
                  <Image
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
              </div>
            </div>
            <div>
              <Items className="grid grid-cols-4 w-36" items={items} />
            </div>
            <div className="grid grid-rows-2 justify-center gap-5  ">
              <div>
<<<<<<< Updated upstream
                <Image
                  className="rounded-full mx-auto border-solid border-2 border-white"
                  width={100}
                  height={100}
<<<<<<< Updated upstream
                  src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${currentUserObj.championName}.png`}
=======
                  src="http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Jhin.png"
>>>>>>> Stashed changes
                  alt="placeholder"
                />
              </div>
              <div className="grid items-center grid-rows-2">
                <Image
                  className="mx-auto  border-solid border-2 border-white"
                  width={30}
                  height={30}
                  layout="fixed"
<<<<<<< Updated upstream
                  src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/${
                    summonerSpells[currentUserObj.summoner1Id].key
                  }.png`}
=======
                  src="http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/SummonerFlash.png"
>>>>>>> Stashed changes
                  alt="placeholder"
                />
                <Image
                  className="mx-auto border-solid border-2 border-white"
                  width={30}
                  height={30}
                  layout="fixed"
<<<<<<< Updated upstream
                  src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/${
                    summonerSpells[currentUserObj.summoner2Id].key
                  }.png`}
=======
                  src="http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/SummonerBarrier.png"
>>>>>>> Stashed changes
                  alt="placeholder"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-2 justify-center gap-5">
<<<<<<< Updated upstream
              <div>{currentUserObj.championName}</div>
              <div>Cs {currentUserObj.totalMinionsKilled}</div>
            </div>
            <div className="grid grid-rows-2 justify-center gap-5">
              <div>kda {Number(currentUserObj.challenges?.kda.toFixed(2))}</div>
              <div>
                {currentUserObj.kills} / {currentUserObj.deaths} /
                {currentUserObj.assists}
=======
                <p>{match.details.info.gameType}</p>
                <p>{moment(match.match_created_at).fromNow()}</p>
              </div>
              <div
                className={`${
                  currentUserObj?.win ?? false
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                <p>{currentUserObj?.win ?? false ? "Win" : "Lose"}</p>
                <p>
                  {moment
                    .utc(match.details.info.gameDuration * 1000)
                    .format("mm:ss")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="grid grid-rows-2 justify-center gap-5">
                <div>{currentUserObj.championName}</div>
                <div>Cs {currentUserObj.totalMinionsKilled}</div>
              </div>
              <div className="grid grid-rows-2 justify-center gap-5">
                <div>
                  kda {Number(currentUserObj.challenges?.kda.toFixed(2))}
                </div>
                <div>
                  {currentUserObj.kills} / {currentUserObj.deaths} /
                  {currentUserObj.assists}
                </div>
>>>>>>> Stashed changes
              </div>
            </div>
            <div className="hidden xl:block">
              <div className="grid grid-rows-5 grid-flow-col">
                {match.details.info.participants.map(function (player, i) {
                  return (
                    <div key={i} className="cursor-pointer">
                      <Link
                        href={`/dashboard/${server}/${player.summonerName}`}
                        passHref
                      >
                        <div className="flex gap-2 text-left">
                          <div>
                            <Image
                              className=" mx-auto border-solid border-2 border-white"
                              width={20}
                              height={20}
                              src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${player.championName}.png`}
                              alt="placeholder"
                            />
                          </div>
                          <div>
                            <p>{player.summonerName}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
<<<<<<< Updated upstream
                  </Link>
                </div>
              );
            })}
=======
              <div>-jhin-</div>
              <div>Cs 234</div>
            </div>
            <div className="grid grid-rows-2 justify-center gap-5">
              <div>kda 23.1</div>
              <div>2/3/4</div>
            </div>
          </div>
          <div className="grid grid-rows-5 col-span-2">
            <div className="grid gap-5  grid-cols-2">
              <div className="flex justify-around gap-3 ">
                <div>
                  <Image
                    className=" mx-auto border-solid border-2 border-white"
                    width={30}
                    height={30}
                    src="http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Jhin.png"
                    alt="placeholder"
                  />
                </div>
                <div className="my-auto">
                  <p>sumname1</p>
                </div>
              </div>
              <div className="flex justify-around gap-3">
                <div>
                  <Image
                    className=" mx-auto border-solid border-2 border-white"
                    width={30}
                    height={30}
                    src="http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Ahri.png"
                    alt="placeholder"
                  />
                </div>
                <div className="my-auto">
                  <p>sumname1</p>
                </div>
              </div>
            </div>
            <div className="grid gap-5 grid-cols-2">
              <div className="flex justify-around gap-3">
                <div>
                  <Image
                    className=" mx-auto border-solid border-2 border-white"
                    width={30}
                    height={30}
                    src="http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Teemo.png"
                    alt="placeholder"
                  />
                </div>
                <div className="my-auto">
                  <p>sumname1</p>
                </div>
              </div>
              <div className="flex justify-around gap-3 ">
                <div>
                  <Image
                    className=" mx-auto border-solid border-2 border-white"
                    width={30}
                    height={30}
                    src="http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Sett.png"
                    alt="placeholder"
                  />
                </div>
                <div className="my-auto">
                  <p>sumname1</p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 grid-cols-2">
              <div className="flex justify-around gap-3">
                <div>
                  <Image
                    className=" mx-auto border-solid border-2 border-white"
                    width={30}
                    height={30}
                    src="http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Zed.png"
                    alt="placeholder"
                  />
                </div>
                <div className="my-auto">
                  <p>sumname1</p>
                </div>
              </div>
              <div className="flex justify-around gap-3">
                <div>
                  <Image
                    className=" mx-auto border-solid border-2 border-white"
                    width={30}
                    height={30}
                    src="http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Nasus.png"
                    alt="placeholder"
                  />
                </div>
                <div className="my-auto">
                  <p>sumname1</p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 grid-cols-2">
              <div className="flex justify-around gap-3">
                <div>
                  <Image
                    className=" mx-auto border-solid border-2 border-white"
                    width={30}
                    height={30}
                    src="http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Vayne.png"
                    alt="placeholder"
                  />
                </div>
                <div className="my-auto">
                  <p>sumname1</p>
                </div>
              </div>
              <div className="flex justify-around gap-3">
                <div>
                  <Image
                    className=" mx-auto border-solid border-2 border-white"
                    width={30}
                    height={30}
                    src="http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Ezreal.png"
                    alt="placeholder"
                  />
                </div>
                <div className="my-auto">
                  <p>sumname1</p>
                </div>
              </div>
            </div>
            <div className="grid gap-5 grid-cols-2">
              <div className="flex justify-around gap-3">
                <div>
                  <Image
                    className=" mx-auto border-solid border-2 border-white"
                    width={30}
                    height={30}
                    src="http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Zilean.png"
                    alt="placeholder"
                  />
                </div>
                <div className="my-auto">
                  <p>sumname1</p>
                </div>
              </div>
              <div className="flex justify-around gap-3">
                <div>
                  <Image
                    className="mx-auto border-solid border-2 border-white"
                    width={30}
                    height={30}
                    src="http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Lux.png"
                    alt="placeholder"
                  />
                </div>
                <div className="my-auto">
                  <p>sumname1</p>
                </div>
              </div>
            </div>
>>>>>>> Stashed changes
=======
                  );
                })}
              </div>
            </div>
            <div>
              <Disclosure.Button className="py-2">
                <ArrowDropDownIcon>name_of_the_icon</ArrowDropDownIcon>
              </Disclosure.Button>
            </div>
>>>>>>> Stashed changes
          </div>
        </div>
        <div className="px-2 ">
          <Disclosure.Panel className=" pt-1 bg-secondary">
            <div className="">
              <GameDetails
                topDmg={topDmg}
                match={team1}
                server={server}
              ></GameDetails>
            </div>
            <div>
              <GameDetails
                topDmg={topDmg}
                match={team2}
                server={server}
              ></GameDetails>
            </div>
          </Disclosure.Panel>
        </div>
      </Disclosure>
    </div>
  );
}
