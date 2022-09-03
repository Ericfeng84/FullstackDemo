import { useState, useEffect, useRef } from "react";
import { v4 } from "uuid";

const Edit = ({ setList,addCustomer,currentCustomer }) => {
  function slickButton() {
      const customer =  {
          firstName,
          LastName:lastName,
          email,
      }
      console.log(customer)

      addCustomer(customer);
  }

  const [firstName, setFirstName] = useState(currentCustomer.firstName);
  function updateFirstName(e) {
    setFirstName(e.target.value);
    console.log(firstName);
  }

  const [lastName, setLastname] = useState(currentCustomer.LastName);
  function updateLastName(e) {
    setLastname(e.target.value);
    console.log(lastName);
  }

  const [email, setEmail] = useState(currentCustomer.email);
    function updateEmail(e) {
        setEmail(e.target.value);
    console.log(email);
  }

    useEffect(() => {
      setFirstName(currentCustomer.firstName);
      setLastname(currentCustomer.LastName);
      setEmail(currentCustomer.email)
    }, [currentCustomer]);

  return (
    <div>
      <h1>Edit Customer Register</h1>
      <p>First Name</p>
      <input type="text" value={firstName} onChange={updateFirstName}></input>
      <p>Last Name</p>
      <input type="text" value={lastName} onChange={updateLastName} />
      <p>Email</p>
      <input type="email" value={email} onChange={updateEmail} />
      <button className="add" onClick={slickButton}>
        修改
      </button>
    </div>
  );
};

export default Edit
;
