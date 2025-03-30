import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/global.css";
import { router } from "./libs/router";

import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </StrictMode>
);
