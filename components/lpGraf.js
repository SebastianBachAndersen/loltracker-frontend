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

export default function LpGraf({ Data }) {
  const rank = [];
  Data?.map((x) => {
    console.log(moment.utc(x.data).format("ll"));
    let lOl_rank = {
      date: moment.utc(x.data).format("ll"),
      league_points: x.league_points
    };
    rank.push(lOl_rank);
  });
  console.log(rank);
  return (
    <div className="p-2">
      <h2 className="text-center">-current_rank-</h2>
      <div className="h-40">
        <ResponsiveContainer width="90%" aspect={3}>
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
            <CartesianGrid horizontal="true" vertical="" stroke="#243240" />
            <XAxis dataKey={"date"} tick={{ fill: "#fff" }} />
            <YAxis tick={{ fill: "#fff" }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }}
              itemStyle={{ color: "#fff" }}
              cursor={false}
            />
            <Area
              type="monotone"
              dataKey="league_points"
              fill="#8884d8"
              stroke="#8884d8"
              strokeWidth="5"
              dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 5 }}
              activeDot={{
                fill: "#2e4355",
                stroke: "#8884d8",
                strokeWidth: 5,
                r: 10
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
