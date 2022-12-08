import axios from "axios";
import * as React from "react";
import { Component, useEffect } from "react";

interface IUserProvider {
  children: React.ReactNode;
}

interface IUser {
  fullname: string;
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
  const [isFetching, setIsFetching] = React.useState(true);

  const [addressArray, setAddressArray] = React.useState<IAddress[]>([]);
  const [currentAddress, setCurrentAddress] = React.useState<IAddress | null>(
    null
  );
  function login(userObj: IUser) {
    setUser(userObj);
  }

  useEffect(() => {
    console.log(user);
  }, [user]);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/users/token`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsFetching(false));
  }, []);

  return (
    <UserContext.Provider value={{ user, isFetching, currentAddress, login }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
