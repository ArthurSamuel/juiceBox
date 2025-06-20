"use client";

import { Suspense } from "react";
import FeatureResults from "./feature";

export default function Results() {
  return (
    <Suspense>
      <FeatureResults />
    </Suspense>
  );
}
