import { Outlet } from "react-router-dom";
import "./Main.scss";
import Sidebar from "../../components/Sidebar/Sidebar";

function Main() {
  return (
    <div className="main">
      <div className="main__sidebar">
        <Sidebar />
      </div>
      <div className="main__content">
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
