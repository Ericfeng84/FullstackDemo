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
    console.log("start post", newCustomer, JSON.stringify({ newCustomer }));
      const body = JSON.stringify( newCustomer );
      console.log(body)
      
    await fetch(API_GET_DATA, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body:body,
    });
  }

  function addCustomer(customer){
    console.log("PostCustomer"+customer)
    postData(customer).then(()=>fetchCustomer(setCustomerList))
    console.log("Post Refresh")

  }

  //Update Customer
  function updateCustomer(customer){
    console.log("updateCustomer"+customer)
    // postData(customer).then(()=>fetchCustomer(setCustomerList))
    // console.log("Post Refresh")

  }

  // useEffect(() => {
  //   postData(customer);
  // }, [customer]);

  return (
    <div className="app">
      <Add setList={setCustomerList} setNewCustomer={setCustomer} addCustomer={addCustomer} />
      <Edit currentCustomer={customer} updateCustomer={updateCustomer}/>
      <List listData={customerList} deleteData={setCustomerList} editCustomer={setCustomer}  />
    </div>
  );
};

export default Home;
