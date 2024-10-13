import { user } from "../../components/types/User";
import UserCard from "../../components/UserCard/UserCard";
import { userData } from "../../data/userData";
import "./Overview.scss";

function Overview() {
  const data = userData;

  return (
    <div className="userlist">
      <h1>Übersicht</h1>
      {data.map((item: user) => {
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
