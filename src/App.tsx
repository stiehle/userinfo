import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/Error/ErrorPage";
import Main from "./routes/Main/Main";
import Welcome from "./routes/Welcome/Welcome";
import Overview from "./routes/Overview/Overview";
import Createview from "./routes/Create/CreatView";
import EditView from "./routes/Edit/EditView";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        errorElement: <ErrorPage />,
        element: <Main />,
        children: [
          { path: "/", element: <Welcome /> },
          { path: "/overview", element: <Overview /> },
          { path: "/edit/:itemId", element: <EditView /> },
          { path: "/create", element: <Createview /> },
        ],
      },
    ],
    { basename: "/userinfo/" }
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
