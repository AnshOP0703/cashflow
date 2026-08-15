import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[1] h-[420px] w-[420px] rounded-full max-[820px]:hidden"
      style={{
        background: "radial-gradient(circle, rgba(24,168,115,0.08), transparent 70%)",
        transform: `translate(${pos.x - 210}px, ${pos.y - 210}px)`,
        transition: "transform .12s linear",
      }}
    />
  );
}
