import Head from "next/head";
import Navbar from "@/components/navbar";
import LandingPage from "@/components/landingPage";
import Artists from "@/components/Artists";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { firstName, lastName } from "@/data/data";
import Tabs from "@/components/Tabs";
import Preloader from "@/components/Preloader";
import { client } from "sanity";

export default function Home({landingImages, project}) {
  return (
    <div>
      <Head>
        <title>{`${firstName} ${lastName}`}</title>
        <meta name="description" content={`${firstName}'s Portfolio`} />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/3419/3419350.png"
        />
        {/* <a href="https://www.flaticon.com/free-icons/canvas" title="canvas icons">Canvas icons created by Freepik - Flaticon</a> */}
      </Head>
      <Preloader />
      <Navbar data-scroll-section />
      <LandingPage data-scroll-section landingImages={landingImages} />
      <About data-scroll-section />
      <Artists data-scroll-section project={project} />
      <Tabs data-scroll-section />
      <Footer data-scroll-section />
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "landing-image"]';
  const landingImages = await client.fetch(query);
  const projectQuery = '*[_type == "project"]';
  const project = await client.fetch(projectQuery);
  return {
    props: {
      landingImages,
      project
    },
  };
};
