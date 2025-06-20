"use client";

import LottieIcon from "@/components/lottieIcon/LottieIcon";
import styles from "./input.module.css";
import TextField from "@/components/textField/TextField";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { isValidEmail } from "@/utils/Helper";

export default function FeatureInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const name = params.get("name");
  const [value, setValue] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);

  const handleOnClick = () => {
    if (name) {
      if (!isValidEmail(value)) {
        setErrorMsg("Please Check Your Email");
        return;
      }
    }
    setValue("");
    const path = name ? `/results?name=${name}` : `/input?name=${value}`;
    router.push(path);
  };

  return (
    <div className="h-full w-full relative">
      <LottieIcon />
      <div className="flex justify-center mt-[32px]">
        <div className={styles.titleText}>
          {name
            ? "How should we contact you? Type in your email address."
            : "Let’s start with the basics. Type in your first name."}
        </div>
      </div>
      <div className="absolute w-full bottom-[40%] flex justify-center">
        <div className="w-full moduleSpacingTop moduleSpacingBottom moduleSpacingLeft moduleSpacingRight">
          <TextField
            value={value}
            placholder={name ? "Email address" : "First Name"}
            onClick={() => handleOnClick()}
            onChange={(e) => setValue(e)}
          />
          <div className="pl-[10px] pt-[10px]" style={{ color: "var(--red)" }}>
            {errorMsg}
          </div>
        </div>
      </div>
    </div>
  );
}
