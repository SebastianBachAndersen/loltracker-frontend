import React from "react";
import Image from "next/image";
export default function MatchHistoryCard({ className }) {
  return (
    <div className="p-4">
      <h2>-match-</h2>
      <div className="bg-secondary w-full rounded-md">
        <div className="bg-secondary grid grid-cols-5 text-xs items-center text-center lg:px-5">
          <div className="grid grid-rows-2 justify-center gap-5  ">
            <div>
              <p>Ranked Solo</p>
              <p>2 Days ago</p>
            </div>
            <div className="text-green-600">
              <p>Win</p>
              <p>21:30</p>
            </div>
          </div>
          <div>
            <div className="p-1 flex gap-2">
              <div>
                <Image
                  className="rounded-full mx-auto border-solid border-2 border-white"
                  width={100}
                  height={100}
                  src="http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Jhin.png"
                  alt="placeholder"
                />
              </div>
              <div className="grid items-center grid-rows-2">
                <Image
                  className="mx-auto  border-solid border-2 border-white"
                  width={30}
                  height={30}
                  layout="fixed"
                  src="http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/SummonerFlash.png"
                  alt="placeholder"
                />
                <Image
                  className="mx-auto border-solid border-2 border-white"
                  width={30}
                  height={30}
                  layout="fixed"
                  src="http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/SummonerBarrier.png"
                  alt="placeholder"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-2 justify-center gap-5">
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
          </div>
        </div>
      </div>
    </div>
  );
}
