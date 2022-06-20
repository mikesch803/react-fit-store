import { useAddress } from "../../context";
import "./AddressModal.css";
export function AddressModal({ addressModal, setAddressModal, setDeliveryAddress }) {
  const { addresses } = useAddress();

  return (
    <>
      <div
        style={addressModal ? { display: "block" } : { display: "none" }}
        className="outer-modal-container"
        onClick={(e) => {
          setAddressModal(false);
        }}
      >
        <section
          className="inner-modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="ft-grey ft-w-500 mb-1 ml-1">Choose Address </h2>
          {addresses?.map((item) => (
            <label key={item._id} className="select-address-container" htmlFor={item._id}>
              <input type="radio" id={item._id} name="address" onChange={()=>setDeliveryAddress(item)} />
              <div>
                <h3 className="ft-w-500">
                  {item.name} <span>{item.phone}</span>
                </h3>
                <p>
                  {item.street}, {item.city}-{item.pincode}, {item.state},{" "}
                  {item.country}
                </p>
              </div>
            </label>
          ))}
        </section>
      </div>
    </>
  );
}
