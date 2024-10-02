"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import MagicButton from "./MagicButton";
export function CardDemo() {
  const imageGallery = {
  images: [
    {
      id: 'image1',
      src: 'assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg',
    },
    {
      id: 'image2',
      src: 'emily-campbell-gVG8cRjHF-8-unsplash.jpg',
    },
    {
      id: 'image3',
      src: 'ritchie-valens-6fxiPO6bPpM-unsplash.jpg',
    },
    {
      id: 'image4',
      src: 'robert-shunev-mS1nlYbq1kA-unsplash.jpg',
    },
    {
      id: 'image5',
      src: 'user.jpg',
    },
  ],
}
  return (
    <>
      <div className="max-w-xs w-full">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 bg:gray-600",
            // Preload hover image by setting it in a pseudo-element
           
          )}
        >
          <div className="text relative z-50">
            <Image
              className="rounded-sm"
              src="/assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg"
              width={500}
              height={600}
              alt="Logo"
            />
            <div className="text relative z-50">
              <h1 className="font-bold text-lg md:text-2xl text-gray-900 relative">
               Hp Pavloin Brand Pc
              </h1>
              <p className="font-normal text-base text-gray-900 relative my-2">
                This card is for some special elements, like displaying
                background gifs on hover only.
              </p>
              <MagicButton />
            </div>
          </div>
        </div>
      </div>

      {/* the descripation part */}
    </>
  );
}
