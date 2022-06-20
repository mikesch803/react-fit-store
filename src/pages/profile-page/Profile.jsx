import React, { useEffect }  from "react";
import { useAddress, useLogin } from "../../context";
import { useTitle } from "../../hooks/useTitle";
import "./Profile.css";
export function Profile() {
  const { logoutHandler, user } = useLogin();
  const {
    addAddressHandler,
    getAllAddressesHandler,
    addresses,
    setAddNewAddress,
    addNewAddress,
    removeAddressHandler,
  } = useAddress();

  useTitle("Profile");

  useEffect(() => {
    getAllAddressesHandler();
  }, []);

  return (
    <div className="profile-page">
      <main className="">
        <div className="profile-container ft-grey">
          <h2>Personal Information</h2>
          <h3>
            Name :
            <span className="ft-w-400">
              {user.firstName} {user.lastName}
            </span>
          </h3>
          <h3>
            Email :<span className="ft-w-400"> {user.email}</span>
          </h3>
          <button className="btn btn-logout" onClick={logoutHandler}>
            Logout
          </button>
        </div>

        <ul>
          {addresses?.map((item) => (
            <li className="profile-container card-dismis" key={item._id}>
              <span
                onClick={() => removeAddressHandler(item._id)}
                className=" card-dismis-btn"
              >
                &times;
              </span>

              <h3>
                {item.name} <span>{item.phone}</span>
              </h3>
              <p>
                {item.street}, {item.city}-{item.pincode}, {item.state},{" "}
                {item.country}
              </p>
            </li>
          ))}
        </ul>

        <form
          className="form form-address"
          onSubmit={(e) => {
            addAddressHandler(e, addNewAddress);
          }}
        >
          <h3 className="ft-grey">Add Address</h3>
          <input
            type="text"
            placeholder="Name"
            className="form-input"
            name="name"
            value={addNewAddress.name}
            onChange={(e) =>
              setAddNewAddress({
                ...addNewAddress,
                [e.target.name]: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Street Area"
            className="form-input"
            name="street"
            value={addNewAddress.street}
            onChange={(e) =>
              setAddNewAddress({
                ...addNewAddress,
                [e.target.name]: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Mobile No"
            className="form-input"
            name="phone"
            value={addNewAddress.phone}
            onChange={(e) =>
              setAddNewAddress({
                ...addNewAddress,
                [e.target.name]: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Pincode"
            className="form-input"
            name="pincode"
            value={addNewAddress.pincode}
            onChange={(e) =>
              setAddNewAddress({
                ...addNewAddress,
                [e.target.name]: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="City"
            className="form-input"
            name="city"
            value={addNewAddress.city}
            onChange={(e) =>
              setAddNewAddress({
                ...addNewAddress,
                [e.target.name]: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="State"
            className="form-input"
            name="state"
            value={addNewAddress.state}
            onChange={(e) =>
              setAddNewAddress({
                ...addNewAddress,
                [e.target.name]: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Country"
            className="form-input"
            name="country"
            value={addNewAddress.country}
            onChange={(e) =>
              setAddNewAddress({
                ...addNewAddress,
                [e.target.name]: e.target.value,
              })
            }
          />
          <button className="btn btn-primary" type="submit">
            submit
          </button>
        </form>
      </main>
    </div>
  );
}
