import { useNavigate } from "react-router-dom";

const DetailsForm = ({
  firstName,
  lastName,
  address,
  zip,
  city,
  setCheckout
}) => {
  const navigate = useNavigate();

  const submitDetails = (e) => {
    e.preventDefault();
    navigate("shipping");
  };

  const detailsForm = (e) =>
    setCheckout((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  return (
    <main>
      <h1>Please fill out your personal details</h1>
      <form onSubmit={submitDetails} className="userForm">
        <fieldset className="userFieldset">
          <div className="labelDiv detailsLabel">
            <label htmlFor="firstName">First Name</label>
            <label htmlFor="lastName">Last Name</label>
            <label htmlFor="address">Address</label>
            <label htmlFor="zip">Postal Code</label>
            <label htmlFor="city">City</label>
          </div>
          <div>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={detailsForm}
              required
            />
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={detailsForm}
              required
            />
            <input
              type="text"
              id="address"
              placeholder="Address"
              value={address}
              onChange={detailsForm}
              required
            />
            <input
              type="text"
              id="zip"
              placeholder="Postal Code"
              value={zip}
              onChange={detailsForm}
              required
            />
            <input
              type="text"
              id="city"
              placeholder="City"
              value={city}
              onChange={detailsForm}
              required
            />
          </div>
        </fieldset>
        <div className="backNextWrapper">
          <button
            type="button"
            onClick={() => navigate("/cart")}
            className="backBtn"
          >
            Back
          </button>
          <button type="submit" className="nextBtn">
            Next
          </button>
        </div>
      </form>
    </main>
  );
};

export default DetailsForm;
