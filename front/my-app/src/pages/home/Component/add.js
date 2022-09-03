import { useState } from "react";

const Add = ({ addCustomer }) => {
    const [newCustomer, setNewCustomer] =useState({});

    function handleInputChange(event){
        const {name, value} = event.target;
        setNewCustomer({...newCustomer, [name]:value})
    }

    function clickButton() {
        addCustomer(newCustomer);
    }

    return (
        <div>
            <h1>New Customer Register</h1>
            <p>First Name</p>
            <input type="text" name="firstName" value={newCustomer.firstName} onChange={handleInputChange}></input>
            <p>Last Name</p>
            <input type="text" name="lastName" value={newCustomer.lastName} onChange={handleInputChange} />
            <p>Email</p>
            <input type="email" name="email" value={newCustomer.email} onChange={handleInputChange} />
            <button className="add" onClick={clickButton}>
                新增
            </button>
        </div>
    );
};

export default Add;
