import { User } from "../components/types/User";

export type UserManagementState = User[];

export type UserMangementAction = {
  type: "ADD_USER" | "REMOVE_USER" | "UPDATE_USER";
  user: User;
};

export default function userManagementReducer(prevState: UserManagementState, action: UserMangementAction) {
  let updatedState: UserManagementState;

  switch (action.type) {
    case "ADD_USER": {
      updatedState = [...prevState, action.user];
      break;
    }

    case "REMOVE_USER": {
      updatedState = prevState.filter((user) => user.id !== action.user.id);
      break;
    }

    case "UPDATE_USER": {
      updatedState = prevState.map((user) => (user.id === action.user.id ? action.user : user));
      break;
    }

    default: {
      updatedState = prevState;

      break;
    }
  }

  localStorage.setItem("users", JSON.stringify(updatedState));

  return updatedState;
}
