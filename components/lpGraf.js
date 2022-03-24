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
  { rank: "Iron", league_points: 0, color: "#4d504b" },
  { rank: "Bronze", league_points: 400, color: "#9c5221" },
  { rank: "Silver", league_points: 800, color: "#c2bdb0" },
  { rank: "Gold", league_points: 1200, color: "#cccc33" },
  { rank: "Platinum", league_points: 1600, color: "#b8b7b2" },
  { rank: "Diamond", league_points: 2000, color: "#AED6F1" },
  { rank: "Master", league_points: 2400, color: "#C39BD3" },
  { rank: "GrandMaster", league_points: 2800, color: "#C70039" },
  { rank: "Challenger", league_points: 3200, color: "#2471A3" }
];

const colorKey = {
  Iron: "#4d504b", // dark green
  Bronze: "#9c5221", // dark orange
  Silver: "#c2bdb0", // light yellow
  Gold: "#cccc33", // yellow-green
  Platinum: "#14903F", // dark green-cyan
  Diamond: "#AED6F1", // light cyan-blue
  Master: "#C39BD3", // magenta
  GrandMaster: "#C70039", //dark pink
  Challenger: "#2471A3" //dark cyan-blue
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
      var prevcolor = "none";
      var gratdiants = [];
      var passedPercent = 0;
      var curcolor = "";
      for (let [key, value] of Object.entries(ranks)) {
        var curPercent = (value.length / length) * 100;
        var percent = passedPercent + curPercent;
        passedPercent = curPercent;
        var prevcolor = "true";
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
      gratdiants.push(<stop offset={`100%`} stopColor={curcolor} />);
      return gratdiants;
    };
    return (
      <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
        {getStops(arr)}
      </linearGradient>
    );
  };

  const getCurrentRank = () => {
    const curRank = rank[rank.length - 1];
    var league = tierList.find((tier) =>
      between(
        curRank.league_points,
        tier.league_points,
        tier.league_points + 399
      )
    );

    const pos = curRank.league_points - league.league_points;
    const ranked = (pos) => {
      if (pos < 99) return "4";
      if (pos < 199) return "3";
      if (pos < 299) return "2";
      if (pos < 399) return "1";
    };
    return `${league.rank} ${ranked(pos)}`;
  };

  return (
    <div className="p-4 ">
      <h2 className="text-center">{getCurrentRank()}</h2>
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
