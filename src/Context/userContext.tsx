import * as React from "react";
import { Component } from "react";

interface IUserProvider {
  children: React.ReactNode;
}

interface IUser {
  username: string;
  email: string;
  created: string;
}
interface IAddress {
  address: string;
  addressNumber: string;
  city: string;
  phoneNumber: string;
}

interface IUserContext {
  user: IUser | null;
  isFetching: boolean;
  currentAddress: IAddress | null;
  login: (userObj: IUser) => void;
}

const UserContext = React.createContext({} as IUserContext);

export function useUserContext() {
  return React.useContext(UserContext);
}

function UserProvider({ children }: IUserProvider) {
  const [user, setUser] = React.useState<IUser | null>(null);
  const [isFetching, setIsFetching] = React.useState(false);

  const [addressArray, setAddressArray] = React.useState<IAddress[]>([]);
  const [currentAddress, setCurrentAddress] = React.useState<IAddress | null>(
    null
  );
  function login(userObj: IUser) {
    setUser(userObj);
  }

  React.useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, isFetching, currentAddress, login }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
