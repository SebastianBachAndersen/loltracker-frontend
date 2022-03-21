import Head from "next/head";

const Meta = ({ title, desc, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="og:title" property="og:title" content={title} />
      <meta name="description" content={desc} />

      <meta name="og:title" property="og:title" content={title} />
      <meta name="og:description" property="og:description" content={desc} />
      <meta property="og:site_name" content="Lol Tracker" />
      <meta name="og:type" content="website" />
      {image ? (
        <meta property="og:image" content={`${image}`} />
      ) : (
        <meta property="og:image" content="/favicon.ico" />
      )}
    </Head>
  );
};

export default Meta;
