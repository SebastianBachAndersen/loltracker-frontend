import React from "react";
import {
  LineChart,
  Line,
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
  { rank: "diamond", league_points: 2000, color: "#AED6F1" },
  { rank: "master", league_points: 2400, color: "#C39BD3" },
  { rank: "grandMaster", league_points: 2800, color: "#C70039" },
  { rank: "challenger", league_points: 3200, color: "#2471A3" }
];

const colorKey = {
  iron: "#4d504b", // dark green
  bronze: "#9c5221", // dark orange
  silver: "#c2bdb0", // light yellow
  gold: "#cccc33", // yellow-green
  platinum: "#14903F", // dark green-cyan
  diamond: "#AED6F1", // light cyan-blue
  master: "#C39BD3", // magenta
  grandMaster: "#C70039", //dark pink
  challenger: "#2471A3" //dark cyan-blue
};

export default function LpGraf({ Data }) {
  const rank = [
    {
      date: "Mar 15, 2022",
      league_points: 320,
      rank: "iron"
    },
    {
      date: "Mar 18, 2022",
      league_points: 641,
      rank: "bronze"
    },
    {
      date: "Mar 23, 2022",
      league_points: 1024,
      rank: "silver"
    },
    {
      date: "Mar 23, 2022",
      league_points: 1224,
      rank: "silver"
    },
    {
      date: "Mar 28, 2022",
      league_points: 1524,
      rank: "gold"
    },
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
