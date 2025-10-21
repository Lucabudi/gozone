'use client';
import React, { useEffect, useRef } from "react";



const CursorEffect = () => {

   const cursorStyles: React.CSSProperties = {
  position: "fixed",
  zIndex: 99,
  left: 0,
  top: 0,
  pointerEvents: "none",
  willChange: "transform",
  mixBlendMode: "difference",
};

const cursorCircleStyles = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "transparent",
    border: "2px solid white",
  transformOrigin: "center",
  pointerEvents: "none",
  transition: `
    background-color 0.3s ease,
    width 0.3s ease,
    height 0.3s ease,
    transform 0.15s ease-out
  `,
};

  const cursorRef = useRef(null);
  const cursorCircleRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: 0, y: 0 });
  const speed = 0.1;

  useEffect(() => {
    const updateCoordinates = (e: { clientX: number; clientY: number; }) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const getAngle = (dx: number, dy: number) => (Math.atan2(dy, dx) * 180) / Math.PI;
    const getSqueeze = (dx: number, dy: number) => {
      const distance = Math.sqrt(dx ** 2 + dy ** 2);
      const maxSqueeze = 0.15;
      const accelerator = 1500;
      return Math.min(distance / accelerator, maxSqueeze);
    };

    const updateCursor = () => {
      const diffX = mouse.current.x - pos.current.x;
      const diffY = mouse.current.y - pos.current.y;

      pos.current.x += diffX * speed;
      pos.current.y += diffY * speed;

      const angle = getAngle(diffX, diffY);
      const squeeze = getSqueeze(diffX, diffY);

      const scale = `scale(${1 + squeeze}, ${1 - squeeze})`;
      const rotate = `rotate(${angle}deg)`;
      const translate = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;

      if (cursorRef.current) cursorRef.current.style.transform = translate;
      if (cursorCircleRef.current)
        cursorCircleRef.current.style.transform = `${rotate} ${scale}`;
    };

    let animationFrame: number;
    const loop = () => {
      updateCursor();
      animationFrame = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", updateCoordinates);
    return () => {
      window.removeEventListener("mousemove", updateCoordinates);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div id="cursor" ref={cursorRef} style={cursorStyles}>
      <div className="cursor__circle" ref={cursorCircleRef} style={cursorCircleStyles}></div>
    </div>
  );
};

export default CursorEffect;
