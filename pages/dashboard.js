import Head from "next/head";
import UserSearch from "../components/userSearch";
import LpGraf from "../components/lpGraf";
export default function Dashboard() {
  return (
    <div className=" ">
      <Head>
        <title>PLACEHOLDER - league tracker </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-xl">-Summener Name-</h1>
          </div>
          <div >
            <UserSearch selectRegion={"ml-44"} searchButton={"ml-32"} />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5">
          <div className="grid grid-rows-2 gap-5">
            <div className="bg-primary rounded-md">
              <LpGraf/>
            </div>
            <div className="bg-primary rounded-md">
              {/* < */}
              
              </div> 
          </div>
          <div className="bg-primary  col-span-3 rounded-md">
          </div>
        </div>
      </div>
    </div>
  );
}
