import "../styles/globals.css";
import Sidebar from '../components/sidebar'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-secondary  min-h-screen text-white">
      <Sidebar/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
