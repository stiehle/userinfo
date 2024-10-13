import "./Overview.scss";
import "./../../data/userData";
import { userData } from "./../../data/userData";
import { IconContext } from "react-icons";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaRegAddressCard } from "react-icons/fa";
import { PiGenderIntersex } from "react-icons/pi";
import { IoMailOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";

function Overview() {
  const data = userData;

  return (
    <>
      <div className="userlist">
        <h1>Übersicht</h1>
        {data.map((item) => {
          return (
            <div className="usercard" key={item.id}>
              <IconContext.Provider value={{ color: "blue", size: "20px" }}>
                <div className="usercard__image">
                  <img src={`./user/${item.image}`} alt="User" className="image" />
                </div>
                <div className="usercard__data">
                  <div className="usercard__data-header">{item.username}</div>
                  <div className="usercard__data-items">
                    <div className="item">
                      <LiaBirthdayCakeSolid />
                      {item.birthday}
                    </div>
                    <div className="item">
                      <FaRegAddressCard />
                      {item.address}
                    </div>
                  </div>
                  <div className="usercard__data-items">
                    <div className="item">
                      <PiGenderIntersex />
                      {item.gender}
                    </div>
                    <div className="item">
                      <IoPhonePortraitOutline />
                      {item.phone}
                    </div>
                  </div>
                  <div className="usercard__data-items">
                    <div className="item">
                      <IoMailOutline />
                      {item.email}
                    </div>
                    <div className="item">
                      <TbWorldWww />
                      {item.web}
                    </div>
                  </div>
                </div>
              </IconContext.Provider>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Overview;
