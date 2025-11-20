

import React from "react";
import MainNavbar from "./components/hompage/MainNavbar";
import Hero from "./components/reuse/HeroSlide";
import SubDomainCard from "./components/hompage/SubDomainCard";
import FoodMarketPlace from "./components/hompage/FoodMarketPlace";
import GamemarketPlace from "./components/hompage/GameMarketPlace";
import WellnessMarketPlace from "./components/hompage/WellnessMarketPlace";
import Footer from "./components/hompage/Footer";






export default function Home() {

  const wellnessImages = [
    '/pin/01_PIN-Thai Well-Being.png',
    '/pin/02_PIN-Thai Well-Being.png',
    '/pin/03_PIN-Thai Well-Being.png',

  ]
    const foodImages = [
    '/IG/01-IG__Discover the Flavors.png',
    '/FB/02-FB__Discover the Flavors.png',
    '/pin/03-Pin_Discover the Flavors.png',

  ]

      const gameImages = [
    '/pin/02-Pin_Immersive VR and Tablet.png',
    '/FB/01-FB - Benchmark.png',
    '/pin/01-Pin - UNLOCKING.png',

  ]








  return (
    <main className="min-h-screen flex flex-col">
    
     <MainNavbar />
     <Hero />
      <SubDomainCard />
      <FoodMarketPlace title={"Food Marketplace"} images={foodImages} description={"Authentic Thai ingredients and groceries."} buttonText={"Explore Now"} buttonHref={"/"} />
      <GamemarketPlace title={"Game Marketplace"} description={"Puzzle & trivia games inspired by Thai culture."} buttonText={"Explore Now"} buttonHref={"/"} images={gameImages} />
      <WellnessMarketPlace title={"Wellness Marketplace"} description={"Herbal remedies and wellness essentials."} buttonText={"Explore Now"} buttonHref={"/"} images={wellnessImages}/>      
      <Footer />
    </main>
  );
}