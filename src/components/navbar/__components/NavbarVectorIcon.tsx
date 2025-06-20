import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./NavbarVectorIcon.module.css";
import gsap from "gsap";

export default function NavbarVectorIcon() {
  const boxRef = useRef<HTMLDivElement>(null);
  const uRef = useRef<HTMLImageElement>(null);
  const iRef = useRef<HTMLImageElement>(null);
  const cRef = useRef<HTMLImageElement>(null);
  const ERef = useRef<HTMLImageElement>(null);
  const bRef = useRef<HTMLImageElement>(null);
  const oRef = useRef<HTMLImageElement>(null);
  const xRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const elements = [
      uRef.current,
      iRef.current,
      cRef.current,
      ERef.current,
      oRef.current,
      xRef.current,
    ];

    const handleHover = () => {
      gsap.to(elements, {
        x: -100,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });

      gsap.set(bRef.current, {
        x: -58,
        overwrite: "auto",
      });
    };

    const handleLeaveHover = () => {
      gsap.to(elements, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto",
      });

      gsap.set(bRef.current, {
        x: 0,
        overwrite: "auto",
      });
    };

    box.addEventListener("mouseenter", handleHover);
    box.addEventListener("mouseleave", handleLeaveHover);
    return () => {
      box.removeEventListener("mouseenter", handleHover);
      box.removeEventListener("mouseleave", handleLeaveHover);
    };
  }, []);

  return (
    <div ref={boxRef} className="flex gap-[1px] h-[30px] relative">
      <div className="relative h-full w-[8px]">
        <Image
          alt="logo"
          src="/assets/words/dot.svg"
          width={6.28}
          height={6.26}
          className={styles.wordJDot}
        />
        <Image
          alt="logo"
          src="/assets/words/j.svg"
          width={7.85}
          height={20.82}
          className={styles.wordJ}
        />
      </div>
      <div ref={uRef} className="relative h-full w-[14.96px]">
        <Image
          alt="logo"
          src="/assets/words/u.svg"
          width={14.96}
          height={15.49}
          className={styles.wordU}
        />
      </div>
      <div ref={iRef} className="relative h-full w-[6.28px]">
        <Image
          alt="logo"
          src="/assets/words/dot.svg"
          width={6.28}
          height={6.26}
          className="absolute left-[37%]"
        />
        <Image
          alt="logo"
          src="/assets/words/i.svg"
          width={5.21}
          height={15.1}
          className={styles.wordI}
        />
      </div>
      <div ref={cRef} className="relative h-full w-[16.16px]">
        <Image
          alt="logo"
          src="/assets/words/c.svg"
          width={16.16}
          height={15.88}
          className={styles.wordC}
        />
      </div>
      <div ref={ERef} className="relative h-full w-[16.16px]">
        <Image
          alt="logo"
          src="/assets/words/e.svg"
          width={16.16}
          height={15.88}
          className={styles.wordE}
        />
      </div>
      <div ref={bRef} className="relative h-full w-[16.69px]">
        <Image
          alt="logo"
          src="/assets/words/b.svg"
          width={16.69}
          height={23.12}
          className={styles.wordB}
        />
      </div>
      <div ref={oRef} className="relative h-full w-[16.29px]">
        <Image
          alt="logo"
          src="/assets/words/o.svg"
          width={16.29}
          height={15.88}
          className={styles.wordO}
        />
      </div>
      <div ref={xRef} className="relative h-full w-[15.94px]">
        <Image
          alt="logo"
          src="/assets/words/x.svg"
          width={15.94}
          height={15.1}
          className={styles.wordX}
        />
      </div>
    </div>
  );
}
