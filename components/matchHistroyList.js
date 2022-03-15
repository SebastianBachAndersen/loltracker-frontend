import React from "react";
import MatchHistoryCard from "./matchHistoryCard";

export default function MatchHistroyList({ className }) {
  return (
    <div className="p-4">
      <h2 className="text-center">-match histroy list-</h2>
      <div>
        <MatchHistoryCard />
      </div>
    </div>
  );
}
