import { createBrowserRouter } from "react-router";
import MainLayout from "../Layoutes/MainLayout";
import Home from "../pages/Home";
import PetsAndSupplies from "../pages/PetsAndSupplies";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddListing from "../pages/AddListing";
import DetailsPage from "../pages/DetailsPage";
import OrderForm from "../pages/OrderForm";
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
      {
        path: "pet-and-supplies/:id",
        Component: DetailsPage,
      },
      {
        path: "pet-and-supplies/order/:id",
        Component: OrderForm,
      },
      {
        path: "auth/login",
        Component: Login,
      },
      {
        path: "auth/register",
        Component: Register,
      },
      {
        path: "add-linsting",
        Component: AddListing,
      },
    ],
  },
]);
