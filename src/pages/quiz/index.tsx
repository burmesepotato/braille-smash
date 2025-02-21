import { Suspense, lazy } from "react";

const LazyQuizChoosePage = lazy(() => import("./quiz-choose-page"));
export function QuizChoosePage() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <LazyQuizChoosePage />
    </Suspense>
  );
}

const LazyQuizPlayPage = lazy(() => import("./quiz-play-page"));
export function QuizPlayPage() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <LazyQuizPlayPage />
    </Suspense>
  );
}
