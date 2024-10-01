import { Suspense, lazy } from "react";

const LazyQuizPage = lazy(() => import("./quiz-page"));

export function QuizPage() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <LazyQuizPage />
    </Suspense>
  );
}
