import { useState, useEffect } from "react";


export const HeroSection = ({ text, height = "100vh" }: { text: string; height?: number | string }) => {
  
  function TypingHeading() {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex(index + 1);
        }, 200); // typing speed (ms)
        return () => clearTimeout(timeout);
      }
    }, [index]);

    return (
      <h1 className="text-4xl md:text-[120px] font-bold mb-4 text-center whitespace-pre-line">
        {displayedText}
        <span className="border-r-2 border-white ml-1 animate-pulse">|</span>
      </h1>
    );
  }

  return (
    <div
      style={{
        height: height,
        backgroundImage: `url('/backgroundhome.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)'
      }}
      className="relative flex items-center justify-center px-4"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text content */}
      <div className="relative z-10 text-white px-4 text-center max-w-6xl">
        <TypingHeading />
      </div>
    </div>
  );
};