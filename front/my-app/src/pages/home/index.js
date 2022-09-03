import { useState, useEffect, useRef } from "react";
import Edit from "./Component/Edit";
import List from "./Component/List";
import "./index.css";
import { API_GET_DATA } from "../../gloable/constaint";

const Home = () => {
  const [ListData, setListData] = useState([]);
  const [newCustomer, setNewCustomer] = useState({});



  //   Get Request
  async function fetchCustomer(setListData) {
    console.log("start fetch", API_GET_DATA);
    const res = await fetch(API_GET_DATA);
    const customerList = await res.json();
    console.log("fetch end", customerList);
    setListData(customerList);
  }

  useEffect(() => {
    fetchCustomer(setListData);
  }, []);

  // Post Request
  async function postData(newCustomer) {
    // console.log("start post", newCustomer, JSON.stringify({ newCustomer }));
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

  useEffect(() => {
    postData(newCustomer);
  }, [newCustomer]);

  return (
    <div className="app">
      <Edit setList={setListData} setNewCustomer={setNewCustomer} />
      <List listData={ListData} deleteData={setListData} />
    </div>
  );
};

export default Home;
