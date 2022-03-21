import "../styles/globals.css";
import Sidebar from "../components/sidebar";
import ProgressBar from "../components/progressBar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-secondary min-h-screen text-white flex flex-row">
      <ProgressBar />
      <div className="shrink">
        <Sidebar />
      </div>
      <div className="grow w-full">
        <Component {...pageProps} />
      </div>
      <div className="w-40 shrink "></div>
    </div>
  );
}

export default MyApp;
