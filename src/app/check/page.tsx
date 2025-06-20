"use client";

import { Suspense } from "react";
import FeatureCheck from "./feature";

export default function Check() {
  return (
    <Suspense>
      <FeatureCheck />
    </Suspense>
  );
}
