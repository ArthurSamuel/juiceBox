"use client";

import Image from "next/image";
import Indicator from "@/components/indicator/Indicator";
import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import InstructionText from "./__components/instructionText/InstructionText";

export default function FeatureCheck() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const stepRaw = params.get("step");
  const step = stepRaw ? parseInt(stepRaw) : 1;

  const handleOnClick = () => {
    const path = step === 3 ? "/input" : `/check?step=${step + 1}`;
    router.push(path);
  };

  return (
    <div className="h-full relative pt-[48px]">
      <div className="flex justify-center items-center">
        <Image
          src="/assets/Vector_small.png"
          alt="small_vector_logo"
          width={146}
          height={155}
        />
      </div>
      <div className="moduleSpacingTop moduleSpacingBottom moduleSpacingLeft moduleSpacingRight flex justify-center">
        <InstructionText step={step} />
      </div>
      <div className="flex justify-center moduleSpacingTop moduleSpacingBottom moduleSpacingLeft moduleSpacingRight">
        <Indicator step={step} />
      </div>
      <div className="absolute w-full bottom-[0%] left-[0%] flex justify-center">
        <div className="w-full moduleSpacingTop moduleSpacingBottom moduleSpacingLeft moduleSpacingRight">
          <Button
            color={step === 3 ? "Secondary" : "Transparent"}
            text={step === 3 ? "Get started" : "Continue"}
            onClick={handleOnClick}
          />
        </div>
      </div>
    </div>
  );
}
