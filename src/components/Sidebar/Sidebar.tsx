import { useNavigate } from "react-router-dom";
import IconButton from "../IconButton/IconButton";
import Logo from "../Logo/Logo";
import "./Sidebar.scss";

function Sidebar() {
  const navigate = useNavigate();
  function handleClick(action: string): void {
    console.log(action);
    switch (action) {
      case "show":
        navigate("overview");
        break;

      case "create":
        navigate("create");
        break;
    }
  }

  return (
    <div className="sidebar-items">
      <div className="sidebar-items__header">
        <Logo />
      </div>
      <div className="sidebar-items__action">
        <IconButton buttonFunction={"show"} buttonClick={() => handleClick("show")} buttonText={"Übersicht"} />
        <IconButton buttonFunction={"create"} buttonClick={() => handleClick("create")} buttonText={"Erstellen"} />
      </div>
    </div>
  );
}

export default Sidebar;
