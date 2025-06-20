"use client";

import LottieIcon from "@/components/lottieIcon/LottieIcon";
import styles from "./results.module.css";
import Button from "@/components/button/Button";
import { useRouter, useSearchParams } from "next/navigation";

export default function FeatureResults() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const name = params.get("name");

  const handleOnClick = () => {
    router.push("/");
  };

  return (
    <div className="h-full w-full relative">
      <LottieIcon />
      <div className="flex justify-center mt-[32px]">
        <div className={styles.titleText}>
          Thanks, {name}! Now, it’s time to get a reality check.
          <div className="mt-[20px] text-center">
            This will take 2-3 minutes. 
          </div>
        </div>
      </div>
      <div className="absolute justify-center flex w-full bottom-[0%] moduleSpacingTop moduleSpacingBottom moduleSpacingLeft moduleSpacingRight">
        <Button text="Continue" color="Secondary" onClick={handleOnClick} />
      </div>
    </div>
  );
}
