import { IconContext } from "react-icons";
import { FaRegAddressCard } from "react-icons/fa";
import { IoMailOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { PiGenderIntersex } from "react-icons/pi";
import { TbWorldWww } from "react-icons/tb";
import "./UserCard.scss";
import { Gender, User } from "../types/User";

type ItemProps = {
  item: User;
};

function UserCard({ item }: ItemProps) {
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
    console.log(date);
    return new Date(date).toLocaleDateString();
  }

  return (
    <div className="usercard">
      <IconContext.Provider value={{ color: "blue", size: "20px" }}>
        <div className="usercard__image">
          <img src={`./user/${item.image}`} alt="User" className="image" />
        </div>
        <div className="usercard__data">
          <div className="usercard__data-header">{item.username}</div>
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
      </IconContext.Provider>
    </div>
  );
}

export default UserCard;
