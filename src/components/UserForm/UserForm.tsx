import { useContext } from "react";
import DateInput from "../../components/Dateinput/Dateinput";
import IconButton from "../../components/IconButton/IconButton";
import SelectInput from "../../components/SelectInput/SelectInput";
import TextInput from "../../components/Textinput/Textinput";
import { useFormInput } from "../../hooks/useFormInput";
import { UserContext } from "../../context/UserContext";
import { Gender, User } from "../../components/types/User";
import "./UserForm.scss";

type userProps = {
  user: User | null;
};

function UserForm({ user }: userProps) {
  function getGenderName(gender: Gender): string {
    switch (gender) {
      case Gender.MALE:
        return "Männlich";
      case Gender.FEMALE:
        return "Weiblich";
      case Gender.OTHER:
        return "Divers";
      default:
        return "";
    }
  }

  const userName = useFormInput(user ? user.username : "", true);
  const birthday = useFormInput(user ? user.birthday : "", true);
  const address = useFormInput(user ? user.address : "", true);
  const gender = useFormInput(user ? getGenderName(user.gender) : "", true);
  const phone = useFormInput(user ? user.phone : "", true);
  const mail = useFormInput(user ? user.email : "", true);
  const web = useFormInput(user ? user.web : "", true);
  const image = user ? user.image : "user000.jpg";

  const { usersDispatch } = useContext(UserContext);

  function convertStringToGender(value: string): Gender {
    switch (value) {
      case "Männlich":
        return Gender.MALE;
      case "Weiblich":
        return Gender.FEMALE;
      case "Divers":
        return Gender.OTHER;
      default:
        return Gender.OTHER;
    }
  }

  function isValidInputs(): boolean {
    const isUserNameValid = userName.validateInput(userName.value);
    const isBirthdayValid = birthday.validateInput(birthday.value);
    const isAddressValid = address.validateInput(address.value);
    const isGenderValid = gender.validateInput(gender.value);
    const isPhoneValid = phone.validateInput(phone.value);
    const isMailValid = mail.validateInput(mail.value);
    const isWebValid = web.validateInput(web.value);

    return isUserNameValid && isBirthdayValid && isAddressValid && isGenderValid && isPhoneValid && isMailValid && isWebValid;
  }

  function handleSaveButtonNewUser() {
    if (isValidInputs()) {
      const user: User = {
        id: Math.random(),
        username: userName.value,
        birthday: birthday.value,
        gender: convertStringToGender(gender.value),
        email: mail.value,
        address: address.value,
        phone: phone.value,
        web: web.value,
        image: image,
      };

      usersDispatch({ type: "ADD_USER", user: user });
      alert("Added user");
    } else {
      alert("Bitte die Daten ergänzen");
    }
  }

  function handleSaveButtonChangeUser() {
    if (user) {
      const userChange: User = {
        id: user.id,
        username: userName.value,
        birthday: birthday.value,
        gender: convertStringToGender(gender.value),
        email: mail.value,
        address: address.value,
        phone: phone.value,
        web: web.value,
        image: user.image,
      };

      usersDispatch({ type: "UPDATE_USER", user: userChange });
    }
  }

  return (
    <div className="userform">
      {user ? <h1>Benutzer ändern</h1> : <h1>Benutzer erstellen</h1>}
      <div className="userform__image">
        {user ? (
          <img src={`../user/${image}`} alt="User" className="userform__image-user" />
        ) : (
          <img src={`./user/${image}`} alt="User" className="userform__image-user" />
        )}
      </div>
      <div className="userform__input">
        <TextInput value={userName.value} onChange={userName.handleInputChangeEvent} id={"user"} name={"Benutzername"} error={userName.error} />
        <DateInput value={birthday.value} onChange={birthday.handleInputChangeEvent} id={"birthday"} name={"Geburtstag"} error={birthday.error} />
        <TextInput value={address.value} onChange={address.handleInputChangeEvent} id={"address"} name={"Adresse"} error={address.error} />
        <SelectInput
          value={gender.value}
          onChange={gender.handleInputChangeEvent}
          options={["", "Männlich", "Weiblich", "Divers"]}
          id={"gender"}
          name={"Geschlecht"}
          error={gender.error}
        />
        <TextInput value={phone.value} onChange={phone.handleInputChangeEvent} id={"phone"} name={"Telefon"} error={phone.error} />
        <TextInput value={mail.value} onChange={mail.handleInputChangeEvent} id={"mail"} name={"Mail"} error={mail.error} />
        <TextInput value={web.value} onChange={web.handleInputChangeEvent} id={"web"} name={"Webseite"} error={web.error} />
        {user ? (
          <IconButton buttonFunction={"save"} buttonClick={handleSaveButtonChangeUser} buttonText={"Änderung speichern"} />
        ) : (
          <IconButton buttonFunction={"save"} buttonClick={handleSaveButtonNewUser} buttonText={"Speichern"} />
        )}
      </div>
    </div>
  );
}

export default UserForm;
