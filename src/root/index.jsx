import { createBrowserRouter } from "react-router-dom";

import Home from "../Components/Home/Home";
import Blog from "../Components/Blog/Blog";
import About from "../Components/About/About";
import Info from "../Components/Info/Info";
import Layout from "../outlet";
import News from "../Components/News/News";
import Notfound from "../Components/Notfound/Notfound";
// import Dashboard from "../Components/Dashboard/Dashboard";

export const root = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "info",
        element: <Info />,
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
  {
    path: "*",
    element: <Notfound/>
  }
]);
