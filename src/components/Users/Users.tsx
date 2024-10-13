import { useParams } from "react-router-dom";
import "./Users.scss";

function Users() {
  const { itemId } = useParams();
  return (
    <div className="users">
      {itemId} Users
      <div>Hallo</div>
    </div>
  );
}

export default Users;
