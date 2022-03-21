import "../styles/globals.css";
import Sidebar from "../components/sidebar";
import ProgressBar from "../components/progressBar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-Lightblue min-h-screen text-white flex flex-row">
      <ProgressBar />
      <div className="shrink">
        <div className="w-40 shrink"></div>
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
