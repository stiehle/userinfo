import { IconContext } from "react-icons";
import { FaRegAddressCard } from "react-icons/fa";
import { IoMailOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { PiGenderIntersex } from "react-icons/pi";
import { TbWorldWww } from "react-icons/tb";
import "./UserCard.scss";
import { Gender, User } from "../types/User";
import { useNavigate } from "react-router-dom";
import IconButton from "../IconButton/IconButton";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

type ItemProps = {
  item: User;
};

function UserCard({ item }: ItemProps) {
  const { usersDispatch } = useContext(UserContext);

  const navigate = useNavigate();
  function convertGenderToString(value: Gender): string {
    switch (value) {
      case Gender.MALE:
        return "Männlich";
      case Gender.FEMALE:
        return "Weiblich";
      case Gender.OTHER:
        return "Divers";
      default:
        return "Divers";
    }
  }

  function convertDate(date: string) {
    // console.log(date);
    const dateFormat = new Date(date).toLocaleDateString("de-DE", { year: "numeric", month: "2-digit", day: "2-digit" });
    // console.log(dateFormat);
    return dateFormat;
  }

  function userCardSelect(id: number): void {
    console.log(id);
    navigate("/edit/" + id);
  }

  // function deleteCard(handleInputChangeEvent: React.ChangeEvent<HTMLInputElement>) {
  //   console.log(handleInputChangeEvent.stopPropagation);
  //   handleInputChangeEvent.stopPropagation;
  //   //console.log(id);
  // }

  function deleteCard(id: number) {
    console.log(id, "geklickt");
    usersDispatch({ type: "REMOVE_USER", user: item });
    console.log(item);
  }
  // <div className="usercard" onClick={() => userCardSelect(item.id)}></div>
  return (
    <div className="usercard">
      <IconContext.Provider value={{ color: "blue", size: "20px" }}>
        <div className="usercard__image" onClick={() => userCardSelect(item.id)}>
          <img src={`./user/${item.image}`} alt="User" className="image" />
        </div>
        <div className="usercard__data" onClick={() => userCardSelect(item.id)}>
          <div className="usercard__data-items">
            <div className="usercard__data-header">{item.username}</div>
            {/* <button
              onClick={(e: React.MouseEvent) => {
                deleteCard(e, item.id);
              }}>
              Löschen
            </button> */}
          </div>
          <div className="usercard__data-items">
            <div className="usercard__data-item">
              <LiaBirthdayCakeSolid />
              {convertDate(item.birthday)}
            </div>
            <div className="usercard__data-item">
              <FaRegAddressCard />
              {item.address}
            </div>
          </div>
          <div className="usercard__data-items">
            <div className="usercard__data-item">
              <PiGenderIntersex />
              {convertGenderToString(item.gender)}
            </div>
            <div className="usercard__data-item">
              <IoPhonePortraitOutline />
              {item.phone}
            </div>
          </div>
          <div className="usercard__data-items">
            <div className="usercard__data-item">
              <IoMailOutline />
              {item.email}
            </div>
            <div className="usercard__data-item">
              <TbWorldWww />
              {item.web}
            </div>
          </div>
        </div>
        <div className="usercard__command">
          <IconButton buttonFunction={"trash"} buttonClick={() => deleteCard(item.id)} buttonText={""} />
          {/* <button
            onClick={(e: React.MouseEvent) => {
              deleteCard(e, item.id);
            }}>
            Löschen
          </button> */}
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default UserCard;
