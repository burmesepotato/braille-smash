import { RouteObject } from "react-router-dom";

import { QuizPage, LandingPage, LearningPage, PracticePage } from "@/pages";

export const rootRoute: RouteObject = {
  path: "/",
  children: [
    { index: true, element: <LandingPage /> },
    { path: "learning", element: <LearningPage /> },
    {
      path: "practice",
      element: <PracticePage />,
    },
    { path: "quiz", element: <QuizPage /> },
  ],
};
