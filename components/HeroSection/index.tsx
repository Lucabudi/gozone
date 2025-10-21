'use client';
import Image from "next/image";
import { useState, useEffect } from "react";



export const HeroSection = ({ text, height }: { text: string, height?: number | string }) => {

    function TypingHeading() {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + text[index]);
      setIndex(index + 1);
      }, 200); // typing speed (ms)
      return () => clearTimeout(timeout);}
    // } else {
    //   const resetTimeout = setTimeout(() => { 
    //   setDisplayedText("");
    //   setIndex(0);
    //   }, 15000); // wait 5 seconds before repeating
    //   return () => clearTimeout(resetTimeout);
    // }
  }, [index, text]);

  return (
    <h1 className="text-4xl md:text-[120px] font-bold mb-4 text-center whitespace-pre-line">
      {displayedText}
      <span className="border-r-1 border-black ml-1 animate-pulse"></span>
    </h1>
  );
}
    return (
        <div style={{ height: height }} className={`relative w-full flex items-center justify-center px-10`}>
      {/* Background image */}
            <Image
                src="/backgroundhome.webp" // 👉 put your image in /public/images/
                alt="Hero background"
                fill
                priority
                className="object-cover object-center -z-10"
            />

            {/* Overlay (optional for better text contrast) */}
            <div className="absolute inset-0 bg-black/40 -z-10" />

            {/* Text content */}
            <div className="text-white px-4 text-center">
                <TypingHeading />
            </div>
            </div>
    );
};

