import { Gender } from "../../components/types/User";
import UserForm from "../../components/UserForm/UserForm";

function EditView() {
  const user = {
    id: 1001,
    username: "User 1",
    birthday: "2009-02-22",
    gender: Gender.FEMALE,
    email: "hallo@hallo.de",
    address: "Musterstraße 2",
    phone: "1223344",
    web: "www.user.de",
    image: "user001.jpg",
  };
  return (
    <>
      <UserForm user={user} />
    </>
  );
}

export default EditView;
