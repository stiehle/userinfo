import { useState } from "react";
import { useFormInput } from "../../hooks/useFormInput";
import IconButton from "../IconButton/IconButton";
import "./Create.scss";

function Create() {
  const [selectedGender, setSelectedGender] = useState("");

  const userName = useFormInput("");
  const birthday = useFormInput("");
  const address = useFormInput("");
  // const gender = useFormInput("");
  const phone = useFormInput("");
  const mail = useFormInput("");
  const web = useFormInput("");

  return (
    <>
      <div className="createuser">
        <h1>Benutzer erstellen</h1>
        <div className="createuser__input">
          <label htmlFor="user">Benutzername:</label>
          <input id="user" value={userName.value} onChange={userName.handleInputChangeEvent} />
          <label htmlFor="birthday">Geburtstag:</label>
          <input id="birthday" type="date" value={birthday.value} onChange={birthday.handleInputChangeEvent} />
          <label htmlFor="address">Adresse:</label>
          <input id="address" value={address.value} onChange={address.handleInputChangeEvent} />
          <label htmlFor="gender">Geschlecht:</label>
          <select id="gender" value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
            <option value="male">Männlich</option>
            <option value="female">Weiblich</option>
            <option value="divers">Divers</option>
          </select>
          <label htmlFor="phone">Telefonnummer:</label>
          <input id="phone" value={phone.value} onChange={phone.handleInputChangeEvent} />
          <label htmlFor="mail">Mail:</label>
          <input id="mail" value={mail.value} onChange={mail.handleInputChangeEvent} />
          <label htmlFor="web">Web:</label>
          <input id="web" value={web.value} onChange={web.handleInputChangeEvent} />
        </div>
        <IconButton
          buttonFunction={"save"}
          buttonClick={() => {
            console.log("speichern", { selectedGender });
          }}
          buttonText={"Speichern"}
        />
      </div>
    </>
  );
}

export default Create;

// export default CreateUser();
