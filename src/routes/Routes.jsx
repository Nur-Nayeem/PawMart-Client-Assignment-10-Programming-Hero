import { createBrowserRouter } from "react-router";
import MainLayout from "../Layoutes/MainLayout";
import Home from "../pages/Home/Home";
import PetsAndSupplies from "../pages/ListingsPage/PetsAndSupplies";
import DetailsPage from "../pages/DetailsListingPage/DetailsPage";
import AddListing from "../pages/AddListingPage/AddListing";
import MyListings from "../pages/MyListingsPage/MyListings";
import MyOrders from "../pages/MyOrdersPage/MyOrders";
import UpdateListing from "../pages/UpadateListingPage/UpdateMyListing";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import ForgetPassword from "../pages/auth/ForgetPassswordPage";
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
        path: "category-filtered-product",
        Component: PetsAndSupplies,
      },
      {
        path: "category-filtered-product/:categoryName",
        Component: PetsAndSupplies,
      },
      {
        path: "category-filtered-product/pet-and-supplies/:id",
        element: (
          <PrivateRoute>
            <DetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "add-listing",
        element: (
          <PrivateRoute>
            <AddListing />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-listings",
        element: (
          <PrivateRoute>
            <MyListings />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-listings/update/:id",
        element: (
          <PrivateRoute>
            <UpdateListing />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: MainLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
