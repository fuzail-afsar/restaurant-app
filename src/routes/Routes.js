import { Outlet, useRoutes } from "react-router-dom";
import Layout from "../components/common/layout/Layout";
import Account from "../components/pages/account/Account";
import AddProducts from "../components/pages/admin/AddProducts/AddProducts";
import Admin from "../components/pages/admin/mainAdmin/Admin";
import ViewProducts from "../components/pages/admin/ViewProducts/ViewProducts";
import SignIn from "../components/pages/auth/signin/SignIn";
import SignUp from "../components/pages/auth/signup/SignUp";
import Cart from "../components/pages/cart/Cart";
import Checkout from "../components/pages/checkout/Checkout";
import Home from "../components/pages/home/Home";

const Routes = () => {
  const routes = [
    {
      path: "/",
      element: <Layout children={<Outlet />} />,
      children: [{ index: true, element: <Home /> }],
    },
    {
      path: "/signin",
      element: <Layout children={<Outlet />} />,
      children: [{ index: true, element: <SignIn /> }],
    },
    {
      path: "/signup",
      element: <Layout children={<Outlet />} />,
      children: [{ index: true, element: <SignUp /> }],
    },
    {
      path: "/cart",
      element: <Layout children={<Outlet />} />,
      children: [{ index: true, element: <Cart /> }],
    },
    {
      path: "/checkout",
      element: <Layout children={<Outlet />} />,
      children: [{ index: true, element: <Checkout /> }],
    },
    {
      path: "/account",
      element: <Layout children={<Outlet />} />,
      children: [{ index: true, element: <Account /> }],
    },

    {
      path: "/admin",
      element: <Layout children={<Outlet />} />,
      children: [
        { index: true, element: <Admin /> },
        { path: 'addProduct', element: <AddProducts /> },

      ],
    },
  ];
  return useRoutes(routes);
};

export default Routes;
