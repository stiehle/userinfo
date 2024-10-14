import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/Error/ErrorPage";
import Main from "./routes/Main/Main";
import Welcome from "./routes/Welcome/Welcome";
import Overview from "./routes/Overview/Overview";
import Createview from "./routes/Create/CreatView";
import EditView from "./routes/Edit/EditView";
import { useReducer } from "react";
import userManagementReducer from "./hooks/userManagementReducer";
import { UserContext } from "./context/UserContext";

function App() {
  const [users, usersDispatch] = useReducer(userManagementReducer, []);

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
      <UserContext.Provider value={{ users, usersDispatch }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}

export default App;
