

import React from "react";
import MainNavbar from "../components/hompage/MainNavbar";
import Hero from "../components/reuse/HeroSlide";
import SubDomainCard from "../components/hompage/SubDomainCard";
import FoodMarketPlace from "../components/hompage/FoodMarketPlace";
import GamemarketPlace from "../components/hompage/GameMarketPlace";
import WellnessMarketPlace from "../components/hompage/WellnessMarketPlace";
import Footer from "../components/hompage/Footer";






export default function Home() {

  const wellnessImages = [
    '/featureimages/b1.png',
    '/featureimages/b1.png',
    '/featureimages/b1.png',

  ]








  return (
    <main className="min-h-screen flex flex-col">
    
     <MainNavbar />
     <Hero />
      <SubDomainCard />
      <FoodMarketPlace title={"Food Marketplace"} images={wellnessImages} description={"Authentic Thai ingredients and groceries."} buttonText={"Explore Now"} buttonHref={"https://food.somtammarketplace.com"} />
      <GamemarketPlace title={"Game Marketplace"} description={"Puzzle & trivia games inspired by Thai culture."} buttonText={"Explore Now"} buttonHref={"https://game.somtammarketplace.com"} images={wellnessImages} />
      <WellnessMarketPlace title={"Wellness Marketplace"} description={"Herbal remedies and wellness essentials."} buttonText={"Explore Now"} buttonHref={"https://wellness.somtammarketplace.com"} images={wellnessImages}/>      
      <Footer />
    </main>
  );
}
