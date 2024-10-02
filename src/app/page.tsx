"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./Header";
import { AuroraBackground } from "@/components/ui/aurora-background";
import MagicButton from "@/components/ui/MagicButton";

import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { InfiniteMovingCards } from "@/components/ui/Infinite-moving-cards";
import { testimonials } from "@/data-access";
import Pricing from "@/components/Pricing/page";
import Footer  from "@/components/Footer";
import AllAuctions from "./auctions/page";
import { CardDemo } from "@/components/ui/CardDemo";


export default function Home() {
  return (
    <>
      
        <Header />
        <AuroraBackground showRadialGradient={true}>
          {/* Add any content you want to display within the AuroraBackground */}
          <div className="relative z-1 flex flex-col items-center justify-center h-full">
            <h1 className="text-5xl font-bold mb-4">
              Welcome to Prime Auction!
            </h1>
            {/* <p className="text-2xl mb-8 text-center py-3 px-40 "> */}
             <TypewriterEffect
              words={[
                { text: 'Discover exceptional finds', className: 'text-center' },
                // { text: ' transform your space', className: 'text-center' },
              ]}
             className="text-center p-4"
            cursorClassName="bg-blue-500"
             />
            {/* </p> */}
            <MagicButton />
          </div>
        
        </AuroraBackground>
        <h1 className="flex items-center justify-center text-3xl font-bold sm:text-5xl text-gray-950 mt-4 mb-4">Latest Auctions</h1>
      <div className="flex flex-1 items-center justify-center gap-4">
        {/* <h1 className="flex items-center justify-center">Latest Auctions</h1> */}
        <div className="grid  lg:grid-cols-3  justify-center items-center py-4 sm:grid-cols-1 md:grid-cols-2 gap-20">
          <CardDemo />
          <CardDemo />
          <CardDemo />
          <CardDemo />
          <CardDemo />
          <CardDemo />
        </div>
       
      </div>
      <div>
        <Pricing />
      </div>
      <div
        // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
        className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
      >
        <h1 className="text-3xl font-bold">From Our Clients</h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="fast"
        />
      </div>
      <div className="p-10">
        <Footer />
      </div>
    </>
  );
}
