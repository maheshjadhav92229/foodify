import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import {StoreContext}from "../../context/StoreContext"
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom';

const Verify = () => {

  const [searchParams]= useSearchParams();
  const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const {url} = useContext(StoreContext);
    const navigate =useNavigate();


const verifyPayment = async () => {

  if (!success || !orderId) {
    console.log("Missing params:", success, orderId);
    return;
  }

  try {
    console.log("Sending to backend:", success, orderId);

    const response = await axios.post(
      url + "/api/order/verify",
      { success, orderId }
    );

    console.log("Backend response:", response.data);

    if (response.data.success) {
      navigate("/myorder");
    } else {
      navigate("/");
    }

  } catch (error) {
    console.log("Verify Error:", error);
  }
};

useEffect(() => {
  if (success && orderId) {
    verifyPayment();
  }
}, [success, orderId]);
    console.log(success,orderId)
  return (
    <div className='verify'>
      <div className='spinner'></div>
      a
    </div>
  )
}

export default Verify
