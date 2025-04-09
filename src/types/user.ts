import Address from "./address";
import UserInfo from "./userInfo";

export default interface User {
  name: string;
  surname: string;
  cpf: string;
  email: string;
  password: string;
  userInfo: UserInfo;
  address: Address;
}