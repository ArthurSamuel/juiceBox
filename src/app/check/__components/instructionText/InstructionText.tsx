import { useEffect, useRef } from "react";
import styles from "./InstructionText.module.css";
import gsap from "gsap";

interface InstructionTextProps {
  step: number;
}

export default function InstructionText({ step }: InstructionTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (step !== 1) {
      gsap.to(textRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          // Animate text back in after short delay to allow DOM update
          setTimeout(() => {
            gsap.fromTo(
              textRef.current,
              { x: 100, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.3 }
            );
          }, 50);
        },
      });
    }
  }, [step]);

  if (step === 2) {
    return (
      <div ref={textRef} className={styles.decsText}>
        I’ll ask you a handful of meaningful questions
        <span className={styles.decsTextGray}>
          {" "}
          and compare your responses with people in your industry. 
        </span>
      </div>
    );
  } else if (step === 3) {
    return (
      <div ref={textRef} className={styles.decsText}>
        You’ll get insights into current industry sentiments an
        <span className={styles.decsTextGray}>
          d a reality check about technology in a few minutes. Deal? Great!
        </span>
      </div>
    );
  }
  return (
    <div ref={textRef} className={styles.decsText}>
      Professionals around the world shared how they feel abo
      <span className={styles.decsTextGray}>
        ut technology and I’ve listened. Now it’s your turn.
      </span>
    </div>
  );
}
