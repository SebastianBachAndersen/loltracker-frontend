import "../styles/globals.css";
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-secondary  min-h-screen text-white">
      <Navbar/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
