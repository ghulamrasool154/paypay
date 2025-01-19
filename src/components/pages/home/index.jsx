"use client";
import React, { useState } from "react";
import "./home.css";
import Image from "next/image";
import PaypayVoce from "@/components/homepage-components/paypay-voce/paypay-voce";
import EconomizaVoce from "@/components/homepage-components/economiza-voce/economiza-voce";
import InvesteVoce from "@/components/homepage-components/investe-voce/investe-voce";
import SimplesRapido from "@/components/homepage-components/simples-rapido/simples-rapido";
import HeroSection from "./hero/hero-section";
import IconsDetailsComponent from "@/components/homepage-components/icons-detail-component/icons-details-component";
import MelhorePaty from "@/components/homepage-components/melhore-paty/melhore-paty";
import FacaComponent from "@/components/homepage-components/faca-component/faca-component";
import ClientDizem from "@/components/homepage-components/clients-dizem/clients-dizem";
import ComecePagar from "@/components/homepage-components/comece-pagar/comece-pagar";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <IconsDetailsComponent />
      <PaypayVoce />
      <EconomizaVoce />
      <InvesteVoce />
      <SimplesRapido />
      <MelhorePaty />
      <FacaComponent />
      <ClientDizem />
      <ComecePagar />
    </div>
  );
};

export default HomePage;
