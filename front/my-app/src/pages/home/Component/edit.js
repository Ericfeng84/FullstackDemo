import { useState, useEffect, useRef } from "react";

const Edit = ({ currentCustomer, updateCustomer }) => {


  const [editCustomer, setEditCustomer] =useState({currentCustomer});

  function handleInputChange(event){
      const {name, value} = event.target;
      setEditCustomer({...editCustomer, [name]:value})
  }

    function clickButton() {
        updateCustomer(editCustomer);
    }

    useEffect(() => {
        setEditCustomer(currentCustomer)
    }, [currentCustomer]);

  return (
    <div>
      <h1>Edit Customer Register</h1>
      <p>First Name</p>
      <input type="text" name="firstName" value={editCustomer.firstName} onChange={handleInputChange}></input>
      <p>Last Name</p>
      <input type="text" name="lastName" value={editCustomer.lastName} onChange={handleInputChange} />
      <p>Email</p>
      <input type="email" name="email" value={editCustomer.email} onChange={handleInputChange} />
      <button className="add" onClick={clickButton}>
        修改
      </button>
    </div>
  );
};

export default Edit
;
