import { createBrowserRouter } from "react-router";
import MainLayout from "../Layoutes/MainLayout";
import Home from "../pages/Home";
import PetsAndSupplies from "../pages/PetsAndSupplies";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "pet-and-supplies",
        Component: PetsAndSupplies,
      },
    ],
  },
]);
