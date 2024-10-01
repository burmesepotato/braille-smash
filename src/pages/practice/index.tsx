import { Suspense, lazy } from "react";

const LazyPracticePage = lazy(() => import("./practice-page"));

export function PracticePage() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <LazyPracticePage />
    </Suspense>
  );
}
