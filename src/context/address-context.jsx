import axios from "axios";
import { v4 as uuid } from "uuid";
import { useContext } from "react";
import { createContext, useState } from "react";
import { useToast } from "./toast-context";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");
  const { toastHandler } = useToast();
  const [addresses, setAddresses] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState(addresses[0]);
  const [addNewAddress, setAddNewAddress] = useState({
    _id: uuid(),
    name: "",
    phone: "",
    street: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
  });
  const getAllAddressesHandler = async () => {
    try {
      const response = await axios.get(
        "/api/user/address",

        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setAddresses(response.data.addressList);
    } catch (err) {
      console.error("dsf ", err);
    }
  };

  const addAddressHandler = async (e, address) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/user/address",
        {
          address,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 201) {
        setAddresses(response.data.addressList);
        toastHandler("New Address added", "alert-success");
      }
      setAddNewAddress({
        _id: uuid(),
        name: "",
        phone: "",
        street: "",
        city: "",
        pincode: "",
        state: "",
        country: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const removeAddressHandler = async (id) => {
    try {
      const response = await axios.delete(`/api/user/address/${id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        setAddresses(response.data.addressList);

        toastHandler("Address removed", "alert-danger");
      }
    } catch (err) {}
  };
  return (
    <AddressContext.Provider
      value={{
        getAllAddressesHandler,
        addAddressHandler,
        addresses,
        setAddNewAddress,
        addNewAddress,
        removeAddressHandler,
        deliveryAddress,
        setDeliveryAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
