import React from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import summonerSpells from "../assets/staticData/summonerSpells.json";

export default function MatchHistoryCard({
  className,
  match,
  summoner,
  server
}) {
  let playerMatchID = match.details.metadata.participants.indexOf(
    summoner.puuid
  );
  let currentUserObj = match.details.info.participants[playerMatchID];
  return (
    <div className="p-4">
      <div className="bg-secondary w-full rounded-md">
        <div className="bg-secondary grid grid-cols-4 text-xs items-center text-center lg:px-5">
          <div className="grid grid-rows-2 justify-center gap-5  ">
            <div>
              <p>{match.details.info.gameType}</p>
              <p>{moment(match.match_created_at).fromNow()}</p>
            </div>
            <div
              className={`${
                currentUserObj?.win ?? false ? "text-green-600" : "text-red-600"
              }`}
            >
              <p>{currentUserObj.win ?? false ? "Win" : "Lose"}</p>
              <p>
                {moment
                  .utc(match.details.info.gameDuration * 1000)
                  .format("mm:ss")}
              </p>
            </div>
          </div>
          <div>
            <div className="p-1 flex gap-2">
              <div>
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
                  width={30}
                  height={30}
                  layout="fixed"
                  src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/${
                    summonerSpells[currentUserObj.summoner1Id].key
                  }.png`}
                  alt="placeholder"
                />
                <Image
                  className="mx-auto border-solid border-2 border-white"
                  width={30}
                  height={30}
                  layout="fixed"
                  src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/${
                    summonerSpells[currentUserObj.summoner2Id].key
                  }.png`}
                  alt="placeholder"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-2 justify-center gap-5">
              <div>{currentUserObj.championName}</div>
              <div>Cs {currentUserObj.totalMinionsKilled}</div>
            </div>
            <div className="grid grid-rows-2 justify-center gap-5">
              <div>kda {Number(currentUserObj.challenges?.kda.toFixed(2))}</div>
              <div>
                {currentUserObj.kills} / {currentUserObj.deaths} /
                {currentUserObj.assists}
              </div>
            </div>
          </div>
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
                          width={30}
                          height={30}
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
