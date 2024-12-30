import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface Artwork {
  artist: string;
  art: string;
}

const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "/image1.jpg", // Image from the public/images folder
  },
  {
    artist: "Tom Byrom",
    art: "/image2.jpg",
  },
  {
    artist: "Artist 3",
    art: "/image3.jpg",
  },
  // Add more images as needed
];

export default function ScrollAreaHorizontalDemo() {
  return (
    <div className="px-4 mt-5">
      <h1 className="text-orange-500 font-serif text-2xl text-center">Customize Parties</h1>
      <ScrollArea className="mt-5">
        <div className="flex space-x-4 p-8">
          {works.map((artwork) => (
            <div
              key={artwork.artist}
              className="shrink-0 w-[50%] sm:w-[50%] md:w-[50%] lg:w-[50%] flex"
            >
              {/* Image Section */}
              <div className="relative w-full">
                <Image
                  src={artwork.art}
                  alt={`Photo by ${artwork.artist}`}
                  className="aspect-[3/4] h-[300px] md:h-[400px] lg:h-[500px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  width={375}
                  height={500}
                />
                
                {/* Text Over the Image */}
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center">
                  <h2 className="text-white text-xl font-semibold">Birthday Party $90</h2>
                  <p className="text-white text-sm mt-2">
                    Celebrate your special day with a fun-filled birthday party.
                  </p>
                  <p className="text-white text-sm">
                    We provide decorations, entertainment, and catering.
                  </p>
                  <p className="text-white text-sm">
                    A memorable experience for you and your loved ones.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
