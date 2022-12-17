import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const AddressContext = createContext({});

export function useAddressContext() {
  return useContext(AddressContext);
}

function AddressProvider({ children }) {
  const [address, setAddress] = useState([]);

  useEffect(() => {
    axios.defaults.withCredentials = true;

    axios
      .get(`${import.meta.env.VITE_API}/address`)
      .then((res) => {
        setAddress([...res.data]);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <AddressContext.Provider
      value={{
        address,
        setAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export default AddressProvider;
