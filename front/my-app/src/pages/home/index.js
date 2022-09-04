import { useState, useEffect, useRef } from "react";
import Add from "./Component/add";
import List from "./Component/List";
import "./index.css";
import { API_GET_DATA } from "../../gloable/constaint";
import Edit from "./Component/edit";

const Home = () => {
  const [customerList, setCustomerList] = useState([]);
  const [customer, setCustomer] = useState({});



  //   Get Request
  async function fetchCustomer(setListData) {
    console.log("start fetch", API_GET_DATA);
    const res = await fetch(API_GET_DATA);
    const customerList = await res.json();
    console.log("fetch end", customerList);
    setListData(customerList);
  }

  useEffect(() => {
    fetchCustomer(setCustomerList);
  }, []);

  // Post Request
  async function postData(newCustomer) {
    const body = JSON.stringify( newCustomer );
      
    await fetch(API_GET_DATA, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body:body,
    });
  }
  //PUT request
  async function putData(Customer) {
    const body = JSON.stringify(Customer);
    console.log(`${API_GET_DATA}${Customer.id}`)

    await fetch(`${API_GET_DATA}${Customer.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: body,
    })
  };

    function addCustomer(customer){
    console.log("PostCustomer" + customer)
    postData(customer).then(()=>fetchCustomer(setCustomerList))
    console.log(customer)

  }

  //Update Customer
  function updateCustomer(customer){
    console.log("update Customer");
    putData(customer).then(()=>fetchCustomer(setCustomerList))
    console.log(customer)

  }

  //delete
  async function deleteData(customer) {
    await fetch(`${API_GET_DATA}${customer.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
  }

  function deleteCustomer(customer){
    console.log("delete Customer");
    deleteData(customer).then(()=>fetchCustomer(setCustomerList))
    console.log(customer)

  }

  return (
    <div className="app">
      <Add addCustomer={addCustomer} />
      <Edit currentCustomer={customer} updateCustomer={updateCustomer}/>
      <List listData={customerList} deleteCustomer={deleteCustomer} editCustomer={setCustomer}  />
    </div>
  );
};

export default Home
