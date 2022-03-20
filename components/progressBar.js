import Router from "next/router";
import { useState } from "react";

const ProgressBar = () => {
  const [routerEvent, setRouterEvent] = useState("default");
  Router.events.on("routeChangeStart", () => setRouterEvent("start"));
  Router.events.on("routeChangeComplete", () => {
    setRouterEvent("complete");
    setTimeout(() => {
      setRouterEvent("default");
    }, 400);
  });
  Router.events.on("routeChangeError", () => setRouterEvent("error"));
  const calcWidth = () => {
    switch (routerEvent) {
      case "start":
        return "w-1/3 transition-width duration-1000";
      case "complete":
        return "w-full transition-width duration-200";
      case "error":
        return "w-0";
      default:
        return "w-0";
    }
  };
  return (
    <div
      className={`absolute top-0 ${calcWidth()} bg-blue-500 h-2   z-40`}
    ></div>
  );
};

export default ProgressBar;
