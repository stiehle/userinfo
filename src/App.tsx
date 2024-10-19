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
import { User } from "./components/types/User";
import { userDataTemplate } from "./data/userDataTemplate";

function App() {
  const [users, usersDispatch] = useReducer(userManagementReducer, [], fetchInitUserData);

  function fetchInitUserData(): User[] {
    const stringUsers = localStorage.getItem("users");
    if (stringUsers) {
      return JSON.parse(stringUsers);
    } else return userDataTemplate;
  }

  //   {
  //     id: 12345,
  //     username: "User 2",
  //     birthday: "22.02.2009",
  //     gender: Gender.FEMALE,
  //     email: "hallo@hallo.de",
  //     address: "Musterstraße 2",
  //     phone: "1223344",
  //     web: "www.user.de",
  //     image: "user000.jpg",
  //   },
  // ]);

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
