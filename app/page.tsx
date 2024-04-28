"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [currentImageSrc, setCurrentImageSrc] = useState(
    "/images/the-cleveland-museum-of-art-bHNah-NZGKo-unsplash.jpg"
  );
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setCurrentImageSrc(event.currentTarget.getAttribute("data-image")!);
  };

  return (
    <main className="flex min-h-screen p-8">
      <div className="z-10 w-full max-w-5xl items-center justify-between">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight pb-4">
          View Transition Demo
        </h1>
        <div className="grid grid-cols-4 gap-4 col-start-1">
          <div>
            <a
              href="#"
              data-image="/images/the-cleveland-museum-of-art-bHNah-NZGKo-unsplash.jpg"
              onClick={handleClick}
            >
              <Image
                width={200}
                height={200}
                alt="Demo image"
                src="/images/the-cleveland-museum-of-art-bHNah-NZGKo-unsplash.jpg"
              />
            </a>
          </div>
          <div>
            <a
              href="#"
              data-image="/images/the-cleveland-museum-of-art-M_kaPq0-vgE-unsplash.jpg"
              onClick={handleClick}
            >
              <Image
                width={200}
                height={200}
                alt="Demo image"
                src="/images/the-cleveland-museum-of-art-M_kaPq0-vgE-unsplash.jpg"
              />
            </a>
          </div>
          <div>
            <a
              href="#"
              data-image="/images/the-cleveland-museum-of-art-07dUtb__clQ-unsplash.jpg"
              onClick={handleClick}
            >
              <Image
                width={200}
                height={200}
                alt="Demo image"
                src="/images/the-cleveland-museum-of-art-07dUtb__clQ-unsplash.jpg"
              />
            </a>
          </div>
          <div>
            <a
              href="#"
              data-image="/images/the-cleveland-museum-of-art-5kzPHUYDDPU-unsplash.jpg"
              onClick={handleClick}
            >
              <Image
                width={200}
                height={200}
                alt="Demo image"
                src="/images/the-cleveland-museum-of-art-5kzPHUYDDPU-unsplash.jpg"
              />
            </a>
          </div>
        </div>
        <div className="py-4 h-16">
          <Image
            width={500}
            height={300}
            alt="Demo image"
            src={currentImageSrc}
          />
        </div>
      </div>
    </main>
  );
}
