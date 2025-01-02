"use client"
import { getCookie } from "cookies-next";
import Header from "@/components/home/header";
import React, { useState, useCallback, useEffect } from 'react';
import axios from "axios";

// import uselocalstorage from "@/hooks/localstorage";
const page = () => {
  // https://jsonplaceholder.typicode.com/comments
  // const ref=useRef();
  // console.log("p2p token",getCookie("auth-token"))
//  const[val,setVal] =uselocalstorage("tok","798a76");

const [data, setData] = useState(null);
const [sdata, ssetData] = useState(null);

const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);

const fetchData = useCallback(async () => {
  setLoading(true);
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    setData(response.data);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}, []);
const deta=async () => {
  setLoading(true);
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    setData(response.data);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
  console.log("deta");
}

useEffect(() => {
  // fetchData();
  deta();
  console.log("useEffect");

}, []);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;

  return <div>
  <Header />
  <div>
    <button onClick={()=>ssetData("ddd")}>hgfh</button>
      {data ? (
        <div>
          {/* Render your data here */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
    </div>;
};

export default page;

    


