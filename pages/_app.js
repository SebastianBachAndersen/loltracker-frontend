import "../styles/globals.css";
import Sidebar from "../components/sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-Lightblue min-h-screen text-white flex flex-row">
      <div className="shrink ">
        <Sidebar />
      </div>
      <div className="grow w-full">
        <Component {...pageProps} />
      </div>
      <div className="w-40 shrink shadow-2xl bg-Darkblue"></div>
    </div>
  );
}

export default MyApp;
