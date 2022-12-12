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
  isAdmin: boolean;
  isFetching: boolean;
  isFetchingAdmin: boolean;
  currentAddress: IAddress | null;
  login: (userObj: IUser) => void;
}

const UserContext = React.createContext({} as IUserContext);

export function useUserContext() {
  return React.useContext(UserContext);
}

function UserProvider({ children }: IUserProvider) {
  const [user, setUser] = React.useState<IUser | null>(null);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [isFetching, setIsFetching] = React.useState(true);
  const [isFetchingAdmin, setIsFetchingAdmin] = React.useState(true);

  const [addressArray, setAddressArray] = React.useState<IAddress[]>([]);
  const [currentAddress, setCurrentAddress] = React.useState<IAddress | null>(
    null
  );
  function login(userObj: IUser) {
    setUser(userObj);
  }

  useEffect(() => {
    if (user) {
      axios
        .get(`${import.meta.env.VITE_API}/users/admin`, {
          withCredentials: true,
        })
        .then((res) => setIsAdmin(res.data.admin))
        .catch((e) => console.log(e))
        .finally(() => setIsFetchingAdmin(false));
    }
  }, [user]);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/users/token`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        isAdmin,
        isFetching,
        isFetchingAdmin,
        currentAddress,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
