import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import summonerSpells from "../assets/staticData/summonerSpells.json";

export default function GameDetails({ match }) {
  console.log(match);
  return (
    <div className="p-4">
      {match.details.info.participants.map(function (player, i) {
        console.log(player);
        if (i <= 4) {
          return (
            <div key={i}>
              <div className="bg-white grid grid-cols-4 text-xs items-center text-center lg:px-5">
                <div>
                  <div className="p-1 flex gap-2">
                    <div>
                      <Image
                        className="rounded-full mx-auto border-solid border-2 border-white"
                        width={70}
                        height={70}
                        src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${player.championName}.png`}
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
                          summonerSpells[player.summoner1Id].key
                        }.png`}
                        alt="placeholder"
                      />
                      <Image
                        className="mx-auto border-solid border-2 border-white"
                        width={30}
                        height={30}
                        layout="fixed"
                        src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/${
                          summonerSpells[player.summoner2Id].key
                        }.png`}
                        alt="placeholder"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-rows-2 justify-center gap-5  ">
                  <div>
                    <p>{match.details.info.gameType}</p>
                    <p>{moment(match.match_created_at).fromNow()}</p>
                  </div>
                  <div>
                    <p>
                      {moment
                        .utc(match.details.info.gameDuration * 1000)
                        .format("mm:ss")}
                    </p>
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
              </div>
              {i == 4 ? (
                <div className="bg-red-600">
                  <br />
                </div>
              ) : (
                ""
              )}
            </div>
          );
        }

        return (
          <div key={i}>
            <div className="  grid grid-cols-4 text-xs items-center text-center lg:px-5">
              <div>
                <div className="p-1 flex gap-2">
                  <div>
                    <Image
                      className="rounded-full mx-auto border-solid border-2 border-white"
                      width={70}
                      height={70}
                      src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${player.championName}.png`}
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
                        summonerSpells[player.summoner1Id].key
                      }.png`}
                      alt="placeholder"
                    />
                    <Image
                      className="mx-auto border-solid border-2 border-white"
                      width={30}
                      height={30}
                      layout="fixed"
                      src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/${
                        summonerSpells[player.summoner2Id].key
                      }.png`}
                      alt="placeholder"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-2 justify-center gap-5  ">
                <div>
                  <p>{match.details.info.gameType}</p>
                  <p>{moment(match.match_created_at).fromNow()}</p>
                </div>
                <div>
                  <p>
                    {moment
                      .utc(match.details.info.gameDuration * 1000)
                      .format("mm:ss")}
                  </p>
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
            </div>
          </div>
        );
      })}
    </div>
  );
}
