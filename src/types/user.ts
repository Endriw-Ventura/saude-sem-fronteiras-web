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
  id: number;
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
    bloodType: "",
    allergies: [""],
    cirurgies: [""],
    medications: [""],
    medicalCondition: "",
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
