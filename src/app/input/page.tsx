"use client";

import { Suspense } from "react";
import FeatureInput from "./feature";

export default function Input() {
  return (
    <Suspense>
      <FeatureInput />
    </Suspense>
  );
}
