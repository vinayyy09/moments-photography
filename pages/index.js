import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="Moments Photography"
        message="“Capturing moments from today. Creating memories for a lifetime.”"
      />
      <Slider slides={SliderData} />
      <Instagram />
      <Footer />
    </div>
  );
}
