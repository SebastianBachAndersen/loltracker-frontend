import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import summonerSpells from "../assets/staticData/summonerSpells.json";
import Items from "./Items";

export default function GameDetails({ match, server, topDmg }) {
  return (
    <div className="p-4  grid  gap-2">
      <div
        className={`grid grid-cols-[0.6fr_1fr_1fr_110px] text-xs text-center lg:px-5`}
      >
        <div>Champion</div>
        <div>Stats</div>
        <div>Items</div>
        <div>Dmg Share</div>
      </div>
      {match.map(function (player, i) {
        var dmgprocent =
          ((player?.totalDamageDealtToChampions ?? 1) / topDmg) * 100;
        console.log(dmgprocent);
        const items = [
          player.item0,
          player.item1,
          player.item2,
          player.item3,
          player.item4,
          player.item5,
          player.item6
        ];
        return (
          <div key={i}>
            <div
              className={`${
                player?.win ?? false ? "bg-[#16a34a]" : "bg-[#dc2626]"
              } grid grid-cols-[0.6fr_1fr_1fr_110px] text-xs items-center rounded-md text-center lg:px-5`}
            >
              <div>
                <div className="p-1 flex flex-row gap-2">
                  <div>
                    <Image
                      className="rounded-full mx-auto"
                      width={70}
                      height={70}
                      src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${player.championName}.png`}
                      alt="placeholder"
                    />
                  </div>

                  <div className="grid items-center grid-rows-2">
                    <Image
                      className="mx-auto"
                      width={30}
                      height={30}
                      layout="fixed"
                      src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/${
                        summonerSpells[player.summoner1Id].key
                      }.png`}
                      alt="placeholder"
                    />
                    <Image
                      className="mx-auto"
                      width={30}
                      height={30}
                      layout="fixed"
                      src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/${
                        summonerSpells[player.summoner2Id].key
                      }.png`}
                      alt="placeholder"
                    />
                  </div>
                  <Link
                    href={`/dashboard/${server ?? ""}/${player.summonerName}`}
                    passHref
                  >
                    <div className="flex items-center cursor-pointer">
                      {player.summonerName}
                    </div>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div className="grid grid-rows-2 justify-center gap-5">
                  <div>{player.championName}</div>
                  <div>Cs {player.totalMinionsKilled}</div>
                </div>
                <div className="grid grid-rows-2 justify-center gap-5">
                  <div>kda {Number(player.challenges?.kda.toFixed(2))}</div>
                  <div>
                    {player.kills} / {player.deaths} /{player.assists}
                  </div>
                </div>
              </div>
              <div>
                <Items className="flex flex-row" items={items} />
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className={`bg-blue-600 h-2.5 rounded-full`}
                  style={{ width: `${Math.floor(dmgprocent)}%` }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
