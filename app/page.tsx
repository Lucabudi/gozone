'use client';

import Aree from "@/components/Aree";
import BannerSportello from "@/components/BannerSportello";
import { HeroSection } from "@/components/HeroSection";
import ClimateStories from "@/components/StoriesClimate";
import Image from "next/image";
import { useEffect, useState } from "react";



export default function Home() {
  return (
    <>
    <HeroSection text={"Il clima,\nla nostra\ncasa..."} height={'80vh'} />
    <section className="max-w-6xl mx-auto my-16 px-8 py-10 text-center">
      <h2 className="font-bold text-lg text-gray-700">
        L'associazione Go-Zone nasce come Associazione di Promozione Sociale volta a promuovere esperienze di cittadinanza attiva nel campo del Climate Change, attraverso strategie ed azioni di cura delle persone, della comunità e progetti di sostenibilità sociale ed ambientale.
      </h2>
      <p className="underline uppercase my-10 text-2xl">Esplora le nostre aree di intervento</p>
      <Aree />
    </section>
    <BannerSportello />
    <ClimateStories />
    </>
  );
}
