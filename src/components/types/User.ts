export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

export type User = {
  id: number;
  username: string;
  birthday: string;
  gender: Gender;
  email: string;
  address: string;
  phone: string;
  web: string;
  image: string;
};
