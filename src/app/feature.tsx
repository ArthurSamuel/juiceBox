"use client";

import Image from "next/image";
import styles from "./home.module.css";
import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";

export default function FeatureHome() {
  const router = useRouter();

  return (
    <div className="h-full relative">
      <div className="flex justify-center relative">
        <Image
          alt=""
          src="/assets/Vector.png"
          width={274}
          height={290}
          className={styles.iconSize}
        />
        <div className="absolute left-[10%] top-[5%] textCaption">
          WA businesses feel confident about future growth
        </div>
        <div className="absolute right-[17%] top-[18%] textCaption">
          AI cant replace creativity
        </div>
        <div className="absolute left-[10%] top-[42%] textCaption">
          Sales measure true success
        </div>
        <div className="absolute left-[40%] top-[60%] textCaption">
          Human connection drives WA business
        </div>
        <div className="absolute left-[10%] top-[80%] textCaption">
          The primary barrier to digital <br /> transformation is financial
          investment
        </div>
      </div>
      <div className="mt-[30px] flex justify-center moduleSpacingTop moduleSpacingBottom moduleSpacingLeft moduleSpacingRight">
        <div
          className={`${styles.titleText} pl-[22px] pr-[22px] text-center max-w-[346px] w-full`}
        >
          Compare your thoughts on{" "}
          <span className={styles.titleTextPurple}>technology</span> with
          current industry opinions.
        </div>
      </div>
      <div className="absolute w-full bottom-[0%] left-[0%] flex justify-center">
        <div className="w-full moduleSpacingTop moduleSpacingBottom moduleSpacingLeft moduleSpacingRight">
          <Button
            color="Primary"
            text="Get a reality check"
            onClick={() => router.push("/check?step=1")}
          />
        </div>
      </div>
    </div>
  );
}
