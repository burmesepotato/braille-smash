import { Suspense, lazy } from "react";

const LazyLandingPage = lazy(() => import("./landing-page"));

export const LandingPage = () => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <LazyLandingPage />
    </Suspense>
  );
};
