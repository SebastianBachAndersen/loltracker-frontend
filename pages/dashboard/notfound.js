import React from "react";
import Meta from "../../components/meta";

const Notfound = () => {
  return (
    <div className="h-full">
      <Meta title={`Summoner not found`} desc={`Summoner not found`} />
      <div className="flex m-auto items-center justify-center">
        <p>Could not find the summoner you were looking for</p>
      </div>
    </div>
  );
};

export default Notfound;
