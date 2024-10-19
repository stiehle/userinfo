import { useContext } from "react";
import { User } from "../../components/types/User";
import UserCard from "../../components/UserCard/UserCard";
import "./Overview.scss";
import { UserContext } from "../../context/UserContext";

function Overview() {
  const { users } = useContext(UserContext);
  console.log(users);

  return (
    <div className="userlist">
      <h1>Übersicht</h1>
      {users.map((item: User) => {
        return (
          <div key={item.id}>
            <UserCard item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default Overview;
