import { useState, useEffect } from "react";


export const HeroSection = ({ text, height = "100vh", animation = true, backgroundImage = '' }: { text: string; height?: number | string; animation?: boolean; backgroundImage?: string }) => {

  function TypingHeading() {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
      if (animation && index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex(index + 1);
        }, 200); // typing speed (ms)
        return () => clearTimeout(timeout);
      } else {
        setDisplayedText(text);
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
        backgroundImage: `url('${backgroundImage || '/backgroundhome.webp'}')`,
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

      {/* Wave Shape at Bottom - One Blue Ocean Style */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="absolute bottom-0 w-full h-[100px] md:h-[180px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ opacity: 0.3, position: 'absolute', bottom: 20 }}
        >
          <path
            fill={"#fbfdf4"}
            d="M0,224L40,234.7C80,245,160,267,240,256C320,245,400,203,480,197.3C560,192,640,224,720,218.7C800,213,880,171,960,149.3C1040,128,1120,128,1200,138.7C1280,149,1360,171,1400,181.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>
        
        {/* Middle wave */}
        <svg
          className="absolute bottom-0 w-full h-[90px] md:h-[160px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ opacity: 0.5 }}
        >
          <path
            fill={"rgba(251, 253, 244, 0.71)"}
            d="M0,256L40,245.3C80,235,160,213,240,218.7C320,224,400,256,480,261.3C560,267,640,245,720,224C800,203,880,181,960,154.7C1040,128,1120,96,1200,85.3C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>
        
        {/* Front wave - darkest */}
        <svg
          className="relative block w-full h-[80px] md:h-[180px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill={"#fbfdf4"}
            fillOpacity="1"
            d="M0,288L48,277.3C96,267,192,245,288,240C384,235,480,245,576,229.3C672,213,768,171,864,144C960,117,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};