import { RouteObject } from "react-router-dom";

import { QuizPage, LandingPage, PracticePage, QuizPlayPage } from "@/pages";

export const rootRoute: RouteObject = {
  path: "/",
  children: [
    { index: true, element: <LandingPage /> },
    {
      path: "practice",
      element: <PracticePage />,
    },
    {
      path: "quiz",
      children: [
        {
          index: true,
          element: <QuizPage />,
        },
        {
          path: "play",
          element: <QuizPlayPage />,
        },
      ],
    },
  ],
};
