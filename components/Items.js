import Image from "next/image";
import React from "react";

export default function Items({ className, items }) {
  return (
    <div className={className}>
      {items.map(function (item, i) {
        return (
          <div key={i}>
            {item == 0 ? (
              <div className="w-[10px] h-[10px] md:w-[20px] md:h-[20px]"></div>
            ) : (
              <div className="min-w-[10px] min-h-[10px] md:min-w-[20px] md:min-h-[20px]">
                <Image
                  className=" mx-auto border-solid border-2 border-white"
                  width={32}
                  height={32}
                  src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/item/${item}.png`}
                  alt="placeholder"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
