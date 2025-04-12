import { Suspense, lazy } from "react";

const LazyQuizChoosePage = lazy(() => import("./quiz-choose-page"));
export function QuizChoosePage() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <LazyQuizChoosePage />
    </Suspense>
  );
}

const LazyTimerSmashPage = lazy(() => import("./timer-smash-page"));
export function TimerSmashPage() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <LazyTimerSmashPage />
    </Suspense>
  );
}
