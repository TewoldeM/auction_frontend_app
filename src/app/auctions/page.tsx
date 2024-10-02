import Footer from "@/components/Footer";
import { CardDemo } from "@/components/ui/CardDemo";
import React from "react";

const AllAuctions = () => {
  return (
    <>
    <div>
         <h1 className="flex items-center justify-center text-3xl font-bold sm:text-5xl text-gray-950 mt-12 mb-4">
        All Auction From PrimarAuction
      </h1>
      <div className="flex flex-1 items-center justify-center gap-4 mt-20 ">
        <div className="grid  lg:grid-cols-3  justify-center items-center py-4 sm:grid-cols-1 md:grid-cols-2 gap-20">
          <CardDemo />
          <CardDemo />
          <CardDemo />
          <CardDemo />
          <CardDemo />
          <CardDemo />
        </div>
      </div>
      <div className="p-10">
        <Footer />
      </div>
    </div>
   
    </>
  );
};

export default AllAuctions;
