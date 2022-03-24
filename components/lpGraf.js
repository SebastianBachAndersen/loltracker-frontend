import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import moment from "moment";

const tierList = [
  { rank: "iron", league_points: 0, color: "#4d504b" },
  { rank: "bronze", league_points: 400, color: "#9c5221" },
  { rank: "silver", league_points: 800, color: "#c2bdb0" },
  { rank: "gold", league_points: 1200, color: "#cccc33" },
  { rank: "platinum", league_points: 1600, color: "#b8b7b2" },
  { rank: "diamond", league_points: 2000, color: "#cfe4ee" },
  { rank: "master", league_points: 2400, color: "#2272b5" },
  { rank: "grandMaster", league_points: 2800, color: "#8884d8" },
  { rank: "challenger", league_points: 3200, color: "#fff" }
];

const colorKey = {
  iron: "4d504b",
  bronze: "#9c5221",
  silver: "#c2bdb0",
  gold: "#cccc33",
  platinum: "#14903F",
  diamond: "#cfe4ee",
  master: "#2272b5",
  grandMaster: "#8884d8",
  challenger: "#fff"
};

export default function LpGraf({ Data }) {
  const rank = [
    {
      date: "Mar 15, 2022",
      league_points: 320,
      rank: "iron"
    },
    {
      date: "Mar 15, 2022",
      league_points: 641,
      rank: "bronze"
    },
    {
      date: "Mar 15, 2022",
      league_points: 1024,
      rank: "silver"
    },
    {
      date: "Mar 15, 2022",
      league_points: 1306,
      rank: "gold"
    }
  ];
  Data?.map((x) => {
    let tier = "iron";
    tierList.map((y) => {
      if (y.league_points <= x.league_points) {
        tier = y.rank;
      }
    });
    let lOl_rank = {
      date: moment.utc(x.data).format("ll"),
      league_points: x.league_points,
      rank: tier
    };
    rank.push(lOl_rank);
  });
  console.log(rank);
  const percentage = (400 / 3200) * 100;

  function between(x, min, max) {
    return x >= min && x <= max;
  }

  var arr = {};
  var length = 0;
  const getColor = () => {
    rank.map((entry, i) => {
      var league = tierList.find((tier) =>
        between(
          entry.league_points,
          tier.league_points,
          tier.league_points + 399
        )
      );
      if (arr[[league.rank]]) {
        arr[[league.rank]].push(entry);
      } else {
        arr[[league.rank]] = [entry];
      }
      length++;
    });
    const getStops = (ranks) => {
      console.log(ranks);
      var prevcolor = "none";
      var gratdiants = [];
      var passedPercent = 0;
      var curcolor = "";
      for (let [key, value] of Object.entries(ranks)) {
        var curPercent = (value.length / length) * 100;
        var percent = passedPercent + curPercent;
        passedPercent = curPercent;
        var prevcolor = "true";
        console.log(percent);
        console.log(curPercent);
        console.log(key);
        console.log(value.length);
        console.log(colorKey[[key]]);
        curcolor = colorKey[[key]];
        gratdiants.push(
          <>
            {prevcolor === "true" ? (
              <stop offset={`${percent}%`} stopColor={colorKey[[key]]} />
            ) : (
              ""
            )}
            <stop offset="0%" stopColor={colorKey[[key]]} />
            <stop offset={`${percent}%`} stopColor={colorKey[[key]]} />
          </>
        );
      }
      gratdiants.push(<stop offset={`100%`} stopColor={colorKey[[key]]} />);
      return gratdiants;
    };
    return (
      <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
        {getStops(arr)}
      </linearGradient>
    );
  };

  return (
    <div className="p-4 ">
      <h2 className="text-center">-current_rank-</h2>
      <div className="bg-sky-50">
        <ResponsiveContainer width="100%" aspect={3}>
          <AreaChart
            width={500}
            height={300}
            data={rank}
            margin={{
              top: 15,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <defs>{getColor()}</defs>
            <CartesianGrid
              horizontal="true"
              vertical=""
              strokeDasharray="3 3"
              stroke="#243240"
            />
            <XAxis dataKey={"date"} tick={{ fill: "#000" }} />
            <YAxis
              tick={{ fill: "#000" }}
              domain={["dataMin", "dataMax + 100"]}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }}
              itemStyle={{ color: "#fff" }}
              cursor={false}
            />
            <Area
              type="monotone"
              dataKey="league_points"
              fill="url(#gradient)"
              stroke="url(#gradient)"
              strokeWidth="2"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
