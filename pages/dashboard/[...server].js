import Head from "next/head";
import UserSearch from "../../components/userSearch";
import LpGraf from "../../components/lpGraf";
import FaveChampList from "../../components/faveCampList";
import MatchHistoryList from "../../components/matchHistroyList";
import Meta from "../../components/meta";
import Image from "next/image";

export async function getServerSideProps(context) {
  // Fetch data from external API
  const { server } = context.query;
  const res = await fetch(
    process.env.BACKEND_API_URL + `summoner/${server[0]}/${server[1]}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`
      }
    }
  );
  const data = await res.json();
  data.server = server[0];
  // Pass data to the page via props
  if (data.error) {
    return {
      redirect: {
        permanent: false,
        destination: "/dashboard/notfound"
      }
    };
  }
  return { props: { data } };
}
function Dashboard({ data }) {
  console.log(data);
  return (
    <div className="md:p-4">
      <Meta
        title={`${data.summoner.name} - Lol Tracker - Ranked`}
        desc={`${data.summoner.name}`}
        image={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${data.summoner.profileIconId}.jpg`}
      />

      <div className=" px-1 md:px-4 mx-auto ">
        <div className="grid grid-cols-1 py-4 lg:grid-cols-3">
          <div className="flex flex-row space-x-6 items-end">
            <Image
              height={128}
              width={128}
              priority={true}
              alt="Profile image"
              src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${data.summoner.profileIconId}.jpg`}
            ></Image>
            <h1 className=" text-sm lg:text-4xl font-bold">
              {data.summoner?.name ?? ""}
            </h1>
          </div>
          <div className="col-span-2  mr-20">
            <UserSearch
              selectRegion={""}
              inputInder={"bg-Darkgray rounded-lg h-10 text-xl p-4"}
              searchButtonOuter={" "}
              searchButtonInder={
                "bg-Darkblue hover:bg-Hower px-1 py-1 text-white font-bold  rounded"
              }
              className={"flex flex-row justify-end"}
            />
          </div>
        </div>
      </div>

      <div className="grid  grid-cols-1 lg:grid-cols-4 px-1 md:px-4 gap-5">
        <div>
          <div className="grid grid-rows-[min-content_1fr] gap-5">
            <div className="bg-Darkgray rounded-md">
              <LpGraf Data={data.lpGrafData.data} />
            </div>
            <div className="bg-Darkgray rounded-md">
              <FaveChampList championStats={data.championStats} />
            </div>
          </div>
        </div>
        <div className="bg-Darkgray lg:col-span-3 rounded-md">
          <MatchHistoryList
            matchHistory={data.matchHistory}
            summoner={data.summoner}
            server={data.server}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
