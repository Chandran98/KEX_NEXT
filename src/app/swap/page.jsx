/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { openOrders } from '@/redux/reducer/order/orderApi';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
  const disptach=useDispatch();
  useEffect(()=>{
    disptach(openOrders());
  },[])
  return (
    <div>swap</div>
  )
}

export default page