import { RouteObject } from "react-router-dom";

import { GamePage, LandingPage, LearningPage } from "@/pages";

export const rootRoute: RouteObject = {
  path: "/",
  children: [
    { index: true, element: <LandingPage /> },
    { path: "game", element: <GamePage /> },
    { path: "learning", element: <LearningPage /> },
  ],
};
