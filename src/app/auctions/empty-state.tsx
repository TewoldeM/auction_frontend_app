import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
 
    <div className="flex items-center justify-center p-16">
        <div className="space-y-8 flex flex-col items-center justify-center">
      <Image src="/assets/undraw_dog_c7i6.svg" width="200" height="200" alt="Package" />
      <h2 className="text-2xl font-bold text-red-500">You have no auctions yet</h2>
      <Button asChild>
        <Link href="/items/create">Create Auction</Link>
      </Button>
    </div>
    </div>
  
  )
}

export default page
