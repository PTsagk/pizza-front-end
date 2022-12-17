import {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

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

function AddressProvider({ children }: { children: React.ReactNode }) {
  const [addresses, setAddresses] = useState<IAddress[]>([]);

  useEffect(() => {
    axios.defaults.withCredentials = true;

    axios
      .get(`${import.meta.env.VITE_API}/address`)
      .then((res) => {
        setAddresses([...res.data]);
      })
      .catch((e) => console.log(e));
  }, []);
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
