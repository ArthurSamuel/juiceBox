"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

export default function LottieIcon() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const anim = lottie.loadAnimation({
      container: containerRef.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/assets/JB2G_Lottie.json",
    });

    return () => anim.destroy();
  }, []);

  return (
    <div className="flex justify-center moduleSpacingTop moduleSpacingBottom moduleSpacingLeft moduleSpacingRight">
      <div ref={containerRef} className="w-[29px] h-[30px]" />
    </div>
  );
}
