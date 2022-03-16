import React from "react";
import MatchHistoryCard from "./matchHistoryCard";

export default function MatchHistroyList({
  className,
  matchHistory,
  summoner
}) {
  return (
    <div className="p-4">
      <h2 className="text-center">-match histroy list-</h2>
      <div>
        {matchHistory.map(function (match, i) {
          return <MatchHistoryCard key={i} match={match} summoner={summoner} />;
        })}
      </div>
    </div>
  );
}
