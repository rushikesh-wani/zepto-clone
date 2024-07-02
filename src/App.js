import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Categories from "./components/Categories";
import CategoryDetail from "./components/CategoryDetail";
import Homepage from "./Sections/Homepage";
import CategoryPage from "./Sections/CategoryPage";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
      ],
    },
    {
      path: "/home",
      element: <Homepage />,
    },

    {
      path: "/categorydetail",
      element: <CategoryPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
