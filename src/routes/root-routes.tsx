import { RouteObject } from "react-router-dom";

import { QuizPage, LandingPage, PracticePage } from "@/pages";

export const rootRoute: RouteObject = {
  path: "/",
  children: [
    { index: true, element: <LandingPage /> },
    {
      path: "practice",
      element: <PracticePage />,
    },
    { path: "quiz", element: <QuizPage /> },
  ],
};
