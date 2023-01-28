import {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { useUserContext } from "./userContext";

interface IAddressProvider {
  children: React.ReactNode;
}

interface IAddress {
  address: string;
  addressNumber: string;
  city: string;
  id: string;
  phoneNumber: string;
  user_id: string;
}

interface IAddressContext {
  addresses: IAddress[];
  setAddresses: React.Dispatch<SetStateAction<IAddress[]>>;
}

const AddressContext = createContext({} as IAddressContext);

export function useAddressContext() {
  return useContext(AddressContext);
}

function AddressProvider({ children }: IAddressProvider) {
  const [addresses, setAddresses] = useState<IAddress[]>([]);
  const { user } = useUserContext();

  useEffect(() => {
    if (!user) return;
    axios.defaults.withCredentials = true;

    axios
      .get(`${import.meta.env.VITE_API}/address`)
      .then((res) => {
        console.log(res.data);
        setAddresses(res.data);
      })
      .catch((e) => console.log(e));
  }, [user]);
  return (
    <AddressContext.Provider
      value={{
        addresses,
        setAddresses,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export default AddressProvider;
