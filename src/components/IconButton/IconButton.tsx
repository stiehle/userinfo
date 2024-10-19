import { IconContext } from "react-icons";
import { CgCheckO, CgCloseO, CgFileAdd, CgLink, CgList, CgPen, CgTrash } from "react-icons/cg";
import "./IconButton.scss";
import { MdSaveAlt } from "react-icons/md";

type iconButton = {
  buttonFunction: string;
  buttonClick(): void;
  buttonText: string;
};

function IconButton({ buttonFunction, buttonClick, buttonText }: iconButton) {
  const iconStock = [
    {
      name: "edit",
      iconSymbol: <CgPen className="iconButton__icon--white" />,
      size: "25px",
    },
    {
      name: "cancel",
      iconSymbol: <CgCloseO className="iconButton__icon--red" />,
      size: "25px",
    },
    {
      name: "ok",
      iconSymbol: <CgCheckO className="iconButton__icon--green" />,
      size: "25px",
    },
    {
      name: "save",
      iconSymbol: <MdSaveAlt className="iconButton__icon--green" />,
      size: "25px",
    },
    {
      name: "trash",
      iconSymbol: <CgTrash className="iconButton__icon--red" />,
      size: "20px",
    },
    {
      name: "link",
      iconSymbol: <CgLink className="iconButton__icon--black" />,
      size: "25px",
    },
    {
      name: "show",
      iconSymbol: <CgList className="iconButton__icon--white" />,
      size: "30px",
    },
    {
      name: "create",
      iconSymbol: <CgFileAdd className="iconButton__icon--white" />,
      size: "30px",
    },
  ];

  function selectIcon() {
    const icon = iconStock.find((iconName) => iconName.name === buttonFunction);

    return <>{icon && icon.iconSymbol}</>;
  }

  function selectIconSize() {
    const icon = iconStock.find((iconName) => iconName.name === buttonFunction);
    if (icon) {
      return icon.size;
    } else "25px";
  }

  return (
    <>
      <IconContext.Provider value={{ className: "iconButton__icon", size: selectIconSize() }}>
        <button onClick={buttonClick} className="iconButton">
          {selectIcon()}
          {buttonText}
        </button>
      </IconContext.Provider>
    </>
  );
}

export default IconButton;
