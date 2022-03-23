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

export default function LpGraf({ Data }) {
  const rank = [
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
  const getColor = () => {
    rank.map((entry) => {
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
    });
    console.log(arr);
    const getStops = (ranks) => {
      for (const [key, value] of Object.entries(ranks)) {
        return (
          <>
            <stop offset="0%" stopColor="blue" />
            <stop offset={`${percentage}%`} stopColor="#9c5221" />
          </>
        );
      }
    };
    return (
      <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
        {getStops(arr)}
      </linearGradient>
    );
  };

  return (
    <div className="p-4">
      {getColor()}
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
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="red" />
                <stop offset={`${percentage}%`} stopColor="#9c5221" />
                <stop offset={`${percentage}%`} stopColor="#c2bdb0" />
                <stop offset={`${percentage}%`} stopColor="#cccc33" />
                <stop offset={`${percentage}%`} stopColor="#b8b7b2" />
                <stop offset={`${percentage}%`} stopColor="#cfe4ee" />
                <stop offset={`${percentage}%`} stopColor="#2272b5" />
                <stop offset={`${percentage}%`} stopColor="#8884d8" />
                <stop offset={`100%`} stopColor="#fff" />
              </linearGradient>
              <linearGradient id="number2" x1="0" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="blue" />
                <stop offset={`${percentage}%`} stopColor="blue" />
                <stop offset={`${percentage}%`} stopColor="blue" />
                <stop offset={`${percentage}%`} stopColor="blue" />
                <stop offset={`${percentage}%`} stopColor="blue" />
                <stop offset={`${percentage}%`} stopColor="blue" />
                <stop offset={`${percentage}%`} stopColor="blue" />
                <stop offset={`${percentage}%`} stopColor="blue" />
                <stop offset={`100%`} stopColor="blue" />
              </linearGradient>
            </defs>
            <CartesianGrid
              horizontal="true"
              vertical=""
              strokeDasharray="3 3"
              stroke="#243240"
            />
            <XAxis dataKey={"date"} tick={{ fill: "#000" }} />
            <YAxis
              tick={{ fill: "#000" }}
              domain={["dataMin", "dataMax + 1"]}
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
