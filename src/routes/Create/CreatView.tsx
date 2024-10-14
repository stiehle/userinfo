import { useContext } from "react";
import DateInput from "../../components/Dateinput/Dateinput";
import IconButton from "../../components/IconButton/IconButton";
import SelectInput from "../../components/SelectInput/SelectInput";
import TextInput from "../../components/Textinput/Textinput";
import { useFormInput } from "../../hooks/useFormInput";
import "./CreateView.scss";
import { UserContext } from "../../context/UserContext";
import { Gender, User } from "../../components/types/User";

function CreateView() {
  const userName = useFormInput("", true);
  const birthday = useFormInput("");
  const address = useFormInput("", true);
  const gender = useFormInput("", true);
  const phone = useFormInput("", true);
  const mail = useFormInput("", true);
  const web = useFormInput("", true);

  const { usersDispatch } = useContext(UserContext);

  function convertStringToGender(value: string): Gender {
    switch (value) {
      case "Male":
        return Gender.MALE;
      case "Female":
        return Gender.FEMALE;
      case "Other":
        return Gender.OTHER;
      default:
        return Gender.OTHER;
    }
  }

  function handleSaveButtonNewUser() {
    console.log("Save");
    const user: User = {
      id: Math.random(),
      username: userName.value,
      birthday: birthday.value,
      gender: convertStringToGender(gender.value),
      email: mail.value,
      address: address.value,
      phone: phone.value,
      web: web.value,
      image: "user000.jpg",
    };

    console.log(user);
    usersDispatch({ type: "ADD_USER", user: user });
    alert("Added user");
  }

  return (
    <div className="createuser">
      <h1>Benutzer erstellen</h1>
      <div className="createuser__input">
        <TextInput value={userName.value} onChange={userName.handleInputChangeEvent} id={"user"} name={"Benutzername"} error={userName.error} />
        <DateInput value={birthday.value} onChange={birthday.handleInputChangeEvent} id={"birthday"} name={"Geburtstag"} />
        <TextInput value={address.value} onChange={address.handleInputChangeEvent} id={"address"} name={"Adresse"} error={address.error} />
        <SelectInput
          value={gender.value}
          onChange={gender.handleInputChangeEvent}
          options={["Männlich", "Weiblich", "Divers"]}
          id={"gender"}
          name={"Geschlecht"}
        />
        <TextInput value={phone.value} onChange={phone.handleInputChangeEvent} id={"phone"} name={"Telefon"} error={phone.error} />
        <TextInput value={mail.value} onChange={mail.handleInputChangeEvent} id={"mail"} name={"Mail"} error={mail.error} />
        <TextInput value={web.value} onChange={web.handleInputChangeEvent} id={"web"} name={"Webseite"} error={web.error} />

        <IconButton buttonFunction={"save"} buttonClick={handleSaveButtonNewUser} buttonText={"Speichern"} />
      </div>
    </div>
  );
}

export default CreateView;
