import { useContext } from "react";
import UserForm from "../../components/UserForm/UserForm";
import { UserContext } from "../../context/UserContext";
import { useParams } from "react-router-dom";
import "./EditView.scss";

function EditView() {
  const { users } = useContext(UserContext);
  const { itemId } = useParams();

  const selectedUser = users.find((item) => item.id === Number(itemId));

  console.log(selectedUser);
  if (selectedUser) {
    const user = {
      id: selectedUser.id,
      username: selectedUser.username,
      birthday: selectedUser.birthday,
      gender: selectedUser.gender,
      email: selectedUser.email,
      address: selectedUser.address,
      phone: selectedUser.phone,
      web: selectedUser.web,
      image: selectedUser.image,
    };
    return (
      <>
        <UserForm user={user} />
      </>
    );
  }
  return <h2>bitte User ID prüfen</h2>;
}

export default EditView;
