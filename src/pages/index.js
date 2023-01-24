import Head from "next/head";
import Navbar from "@/components/navbar";
import LandingPage from "@/components/landingPage";
import Artists from "@/components/Artists";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { firstName, lastName } from "@/data/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${firstName} ${lastName}`}</title>
        <meta name="description" content="Shreya Maurya's Portfolio" />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/3419/3419350.png"
        />
        {/* <a href="https://www.flaticon.com/free-icons/canvas" title="canvas icons">Canvas icons created by Freepik - Flaticon</a> */}
      </Head>
      <Navbar />
      <LandingPage />
      <About />
      <Artists />
      <Footer />
    </>
  );
}
