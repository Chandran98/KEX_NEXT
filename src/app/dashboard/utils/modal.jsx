"use client"
import { getProfile } from "@/redux/reducer/user/userApi";
import { sendSMS } from "@/redux/reducer/utils/utilsApi";
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";


function Modal({ modal, setModal }) {
  const [staate, seetState] = useState(false);
  const openModal = () => {
    // seetState(true);
    setModal(!modal);
    console.log(modal, "modal");
  };
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getProfile());
  },[dispatch])

  const sendOtpFunc=()=>{
    dispatch(sendSMS())
  }

const{loading,userData}=  useSelector((state)=>state.user);
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border  shadow-lg rounded-md bg-white w-[30%]">
        <div className="">
          <div className="flex justify-between">
            <h3 className="text-2xl font-bold text-gray-900 mr-10">
              Mobile Verification
            </h3>
            <button
              onClick={openModal}
              className=" bg-blue-600 rounded-lg p-1 align-middle "
            >
              <IoCloseCircleOutline color="white" />
            </button>
          </div>

          <div className="my-2 ">
            <form action="">
              <span> We will send OTP to your registered mobile no. to {userData?.data?.phone}. Please enter OTP below flied to verify your mobile no. </span>
            {/* <input type="text" className="form-control" defaultValue={userData?.data?.phone}/> */}
            <input
                  type="text"
                  className="form-control mt-3"
                />
         <button
                
                type="submit"
                className=" btn w-full text-white bg-primary mt-2"
              >
                Submit
              </button>
            </form>
           
          </div>
          <span className="mt-4">Didn't  receive OTP ? <strong className="  text-primary font-semibold"> Resend OTP</strong></span>
        </div> 
        {/* {staate?<></>: <button
                onClick={openModal}
                type="submit"
                className=" btn w-full text-white bg-primary mt-2"
              >
                Send OTP
              </button>} */}
      </div>
    </div>
  );
}
export default Modal;
