import { useState, useEffect, useRef } from "react";
import { v4 } from "uuid";

const Edit = ({ setList,setNewCustomer }) => {
  function slickButten() {
    setList(function (prevData) {
      return [
        ...prevData,
        {
          id: v4(),
          firstName,
          lastName,
          email,
        },
      ];
    })
      setNewCustomer(function () {
          return {
          firstName,
          LastName:lastName,
          email,
        }
    });
  }

  const [firstName, setFirstName] = useState("test");
  function updateFirstName(e) {
    setFirstName(e.target.value);
    console.log(firstName);
  }

  const [lastName, setLastname] = useState();
  function updateLastName(e) {
    setLastname(e.target.value);
    console.log(lastName);
  }

  const [email, setEmail] = useState();
    function updateEmail(e) {
        setEmail(e.target.value);
    console.log(email);
  }

  return (
    <div>
      <h1>New Customer Register</h1>
      <p>First Name</p>
      <input type="text" value={firstName} onChange={updateFirstName}></input>
      <p>Last Name</p>
      <input type="text" value={lastName} onChange={updateLastName} />
      <p>Email</p>
      <input type="email" value={email} onChange={updateEmail} />
      <button className="add" onClick={slickButten}>
        新增
      </button>
    </div>
  );
};

export default Edit;
