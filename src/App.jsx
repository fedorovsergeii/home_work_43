
import './App.css'
import { createBrowserRouter, RouterProvider} from "react-router";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import NotFound from "./components/NotFound.jsx";
import Layout from "./components/Layout.jsx";
import Shops from "./components/Shops.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
          children: [
            {
              path: "shops",
              element: <Shops />,
            }
          ]
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ]
    },

  ]
)

const App = () =>  <RouterProvider router={router}/>;

export default App;
