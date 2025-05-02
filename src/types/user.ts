import Address from "./address";
import UserInfo from "./userInfo";

export interface User {
  name: string;
  surname: string;
  cpf: string;
  email: string;
  password: string;
  userInfo: UserInfo;
  address: Address;
}

export interface SimpleUser {
  id: Number;
  name: string;
  surname: string;
  cpf: string;
  email: string;
}

export const defaultUser: User = {
  name: "",
  surname: "",
  cpf: "",
  email: "",
  password: "",
  userInfo: {
    motherName: "",
    bloodType: {
      id: 0,
      name: "",
    },
    allergies: [""],
    previousCirurgies: false,
    cirurgies: [""],
    medications: [""],
    medicalCondition: {
      id: 0,
      name: "",
    },
  },
  address: {
    country: "",
    state: "",
    city: "",
    neighborhood: "",
    streetName: "",
    number: "",
    complement: "",
    zipCode: "",
  },
};
