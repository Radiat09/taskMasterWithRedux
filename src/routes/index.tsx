import App from "@/App";
import Tasks from "@/pages/Tasks";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Tasks,
      },
      {
        path: "/tasks",
        Component: Tasks,
      },
    ],
  },
]);
