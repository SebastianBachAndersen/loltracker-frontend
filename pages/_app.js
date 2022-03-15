import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-secondary  min-h-screen text-white">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
