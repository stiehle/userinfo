import { createContext, Dispatch } from "react";
import { UserManagementState, UserMangementAction } from "../hooks/userManagementReducer";

export const UserContext = createContext<{
  users: UserManagementState;
  usersDispatch: Dispatch<UserMangementAction>;
}>({
  users: [],
  usersDispatch: () => {},
});
