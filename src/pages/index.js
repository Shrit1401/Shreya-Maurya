import Head from "next/head";
import Navbar from "@/components/navbar";
import LandingPage from "@/components/landingPage";
import Artists from "@/components/Artists";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Think Dance</title>
      </Head>
      <Navbar />
      <LandingPage />
      <Artists />
      <Footer />
    </>
  );
}
