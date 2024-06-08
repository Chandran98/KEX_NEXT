/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Select from "react-select";
import Image from "next/image";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, getlogHistory } from "@/redux/reducer/user/userApi";
import { UtilsData } from "./utils/utils";
import { MdVerified, MdError, MdEmail, MdLocationCity } from "react-icons/md";
import { RiBankLine } from "react-icons/ri";
import { MdMobileFriendly } from "react-icons/md";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { kycFormSchema } from "@/utils/formSchema";import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

const inputBlog = [
  { label: "User Name", value: "John" },
  { label: "First Name", value: "John" },
  { label: "Last Name", value: "Brahim" },
  { label: "Age", value: "25" },
  { label: "Address", value: "Developer" },
  { label: "City", value: "Chennai" },
  { label: "State", value: "Tamil nadu" },
  { label: "Postal Code", value: "Tamil nadu" },
];

const options2 = [
  { value: "1", label: "Select" },
  { value: "2", label: "Male" },
  { value: "3", label: "Female" },
  { value: "4", label: "Other" },
];
const options3 = [
  { value: "1", label: "Russia" },
  { value: "2", label: "Canada" },
  { value: "3", label: "China" },
  { value: "4", label: "India" },
];
   {/* <Select
                      options={options2}
                      className="custom-react-select"
                      defaultValue={options2[0]}
                      isSearchable={false}
                    /> */}

const EditProfile = () => {
  const dispatch = useDispatch();

  
  const handleFileChange = (e, name) => {
    const file = e.target.files[0];
    setValue(name, file);
  };
  const form=useForm({
    resolver:zodResolver(kycFormSchema)
  })
  useEffect(() => {
    dispatch(getProfile());
    dispatch(getlogHistory());
  }, [dispatch]);
  const { loading, error, logData, userData } = useSelector(
    (state) => state.user
  );
const  onSubmit=(data)=>{
  console.log("e.target.value",data);
}
  return (
    <>
      <div className="mx-4">
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-3">
        <div className="card ">
          <div className="card-body d-flex">
            <div className="">
              <Image
                src={userData?.data?.avatar}
                className=" rounded-full object-height"
                // fill={true}
                height={200}
                width={150}
                alt=""
              />
            </div>
            <div className="w-100 ps-4">
              <div className="flex justify-content-between">
                <div className="">
                  <h4 className="font-w700"> {userData?.data?.username} </h4>
                  <h5> {userData?.data?.unique_id} </h5>
                  <span>
                    {userData?.data?.address}, {userData?.data?.country}{" "}
                  </span>
                </div>
                <div className="">
                  <div className=" p-2 rounded-lg  bg-primary-light text-center">
                    <Link href={"#"}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_787_189)">
                          <path
                            d="M16.0001 2.66699C13.363 2.66699 10.7851 3.44898 8.59248 4.91406C6.39983 6.37915 4.69086 8.46153 3.68169 10.8979C2.67253 13.3342 2.40848 16.0151 2.92295 18.6015C3.43742 21.1879 4.7073 23.5637 6.572 25.4284C8.4367 27.2931 10.8125 28.563 13.3989 29.0775C15.9853 29.5919 18.6662 29.3279 21.1025 28.3187C23.5389 27.3096 25.6213 25.6006 27.0863 23.4079C28.5514 21.2153 29.3334 18.6374 29.3334 16.0003C29.3334 14.2494 28.9885 12.5156 28.3185 10.8979C27.6484 9.2802 26.6663 7.81035 25.4282 6.57224C24.1901 5.33412 22.7202 4.35199 21.1025 3.68193C19.4849 3.01187 17.751 2.66699 16.0001 2.66699ZM16.0001 26.667C13.8904 26.667 11.8281 26.0414 10.074 24.8693C8.31988 23.6973 6.95271 22.0314 6.14537 20.0823C5.33804 18.1332 5.1268 15.9885 5.53838 13.9194C5.94995 11.8502 6.96586 9.94961 8.45761 8.45785C9.94938 6.96609 11.85 5.95019 13.9191 5.53862C15.9883 5.12704 18.133 5.33828 20.082 6.14561C22.0311 6.95295 23.697 8.32012 24.8691 10.0742C26.0412 11.8284 26.6668 13.8907 26.6668 16.0003C26.6668 18.8293 25.5429 21.5424 23.5426 23.5428C21.5422 25.5432 18.8291 26.667 16.0001 26.667Z"
                            fill="#A098AE"
                          />
                          <path
                            d="M16.0001 22.6667C16.7365 22.6667 17.3334 22.0697 17.3334 21.3333C17.3334 20.597 16.7365 20 16.0001 20C15.2637 20 14.6667 20.597 14.6667 21.3333C14.6667 22.0697 15.2637 22.6667 16.0001 22.6667Z"
                            fill="#A098AE"
                          />
                          <path
                            d="M16.0001 9.33301C15.6465 9.33301 15.3073 9.47348 15.0573 9.72353C14.8072 9.97358 14.6667 10.3127 14.6667 10.6663V17.333C14.6667 17.6866 14.8072 18.0258 15.0573 18.2758C15.3073 18.5259 15.6465 18.6663 16.0001 18.6663C16.3537 18.6663 16.6928 18.5259 16.9429 18.2758C17.1929 18.0258 17.3334 17.6866 17.3334 17.333V10.6663C17.3334 10.3127 17.1929 9.97358 16.9429 9.72353C16.6928 9.47348 16.3537 9.33301 16.0001 9.33301Z"
                            fill="#A098AE"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_787_189">
                            <rect width="32" height="32" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                  {/* <Dropdown className="dropdown ms-auto">
                    <Dropdown.Toggle
                      as="div"
                      className="icon-box icon-box-sm bg-primary-light i-false"
                    >
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.3925 4.60647C26.1493 3.36576 24.4647 2.66895 22.7083 2.66895C20.9519 2.66895 19.2673 3.36576 18.0241 4.60647L15.5295 7.10101L4.30461 18.3265C4.10055 18.5303 3.96826 18.7948 3.92767 19.0803L2.67994 27.8109C2.65288 28 2.66679 28.1927 2.72072 28.376C2.77465 28.5593 2.86735 28.7289 2.99252 28.8732C3.11769 29.0176 3.27243 29.1333 3.44624 29.2126C3.62005 29.292 3.80888 29.333 3.99994 29.333C4.06311 29.3331 4.12621 29.3287 4.18874 29.3197L12.9199 28.0726C13.2054 28.0313 13.4698 27.8989 13.6738 27.695L27.3938 13.9762C28.0091 13.361 28.4972 12.6307 28.8302 11.8268C29.1632 11.023 29.3346 10.1614 29.3346 9.29134C29.3346 8.42126 29.1632 7.5597 28.8302 6.75586C28.4972 5.95202 28.0091 5.22166 27.3938 4.60647H27.3925ZM12.1022 25.4958L5.57154 26.4281L6.50487 19.8981L16.4726 9.92954L22.0709 15.5274L12.1022 25.4958ZM25.5066 12.0909L23.9559 13.6421L18.3574 8.04394L19.9094 6.49181C20.6635 5.77219 21.6659 5.3707 22.7083 5.3707C23.7507 5.3707 24.753 5.77219 25.5071 6.49181C26.2494 7.2344 26.6664 8.24138 26.6664 9.29134C26.6664 10.3413 26.2494 11.3483 25.5071 12.0909H25.5066Z"
                          fill="#A098AE"
                        />
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className="dropdown-menu dropdown-menu-end"
                      align="end"
                    >
                      <li className="dropdown-item">
                        <Link href={"#"}>
                          <i className="fa fa-user-circle text-primary me-2"></i>{" "}
                          View profile
                        </Link>
                      </li>
                      <li className="dropdown-item">
                        <Link href={"#"}>
                          <i className="fa fa-users text-primary me-2"></i> Add
                          to btn-close friends{" "}
                        </Link>
                      </li>
                      <li className="dropdown-item">
                        <Link href={"#"}>
                          <i className="fa fa-plus text-primary me-2"></i> Add
                          to group{" "}
                        </Link>
                      </li>
                      <li className="dropdown-item">
                        <Link href={"#"}>
                          <i className="fa fa-ban text-primary me-2"></i> Block{" "}
                        </Link>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown> */}
                </div>
              </div>
              <div className="d-flex flex-wrap pt-4">
                <UtilsData
                  icon={
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 4.5H4C3.20435 4.5 2.44129 4.81607 1.87868 5.37868C1.31607 5.94129 1 6.70435 1 7.5V17.5C1 18.2956 1.31607 19.0587 1.87868 19.6213C2.44129 20.1839 3.20435 20.5 4 20.5H20C20.7956 20.5 21.5587 20.1839 22.1213 19.6213C22.6839 19.0587 23 18.2956 23 17.5V7.5C23 6.70435 22.6839 5.94129 22.1213 5.37868C21.5587 4.81607 20.7956 4.5 20 4.5ZM21 17.25L16.1 12.85L21 9.42V17.25ZM3 9.42L7.9 12.85L3 17.25V9.42ZM9.58 14.03L11.43 15.32C11.5974 15.4361 11.7963 15.4984 12 15.4984C12.2037 15.4984 12.4026 15.4361 12.57 15.32L14.42 14.03L19.42 18.5H4.6L9.58 14.03ZM4 6.5H20C20.1857 6.50149 20.3673 6.55467 20.5245 6.65358C20.6817 6.75249 20.8083 6.89322 20.89 7.06L12 13.28L3.11 7.06C3.19171 6.89322 3.31826 6.75249 3.47545 6.65358C3.63265 6.55467 3.81428 6.50149 4 6.5Z"
                        fill="#F79F19"
                      />
                    </svg>
                  }
                  title={userData?.data?.email}
                />{" "}
                <UtilsData
                  icon={
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.4401 13.5004C19.2201 13.5004 18.9901 13.4304 18.7701 13.3804C18.3246 13.2822 17.8868 13.1518 17.4601 12.9904C16.9962 12.8216 16.4862 12.8304 16.0284 13.015C15.5706 13.1996 15.1972 13.547 14.9801 13.9904L14.7601 14.4404C13.7861 13.8985 12.8911 13.2256 12.1001 12.4404C11.3149 11.6494 10.6419 10.7544 10.1001 9.78036L10.5201 9.50036C10.9635 9.28327 11.3109 8.90989 11.4955 8.45205C11.6801 7.99421 11.6889 7.48427 11.5201 7.02036C11.3613 6.59278 11.231 6.15515 11.1301 5.71036C11.0801 5.49036 11.0401 5.26036 11.0101 5.03036C10.8887 4.32598 10.5197 3.6881 9.96972 3.2316C9.41972 2.77509 8.7248 2.52997 8.0101 2.54036H5.0101C4.57913 2.53631 4.15235 2.62517 3.75881 2.80089C3.36527 2.9766 3.01421 3.23505 2.72953 3.55864C2.44485 3.88222 2.23324 4.26335 2.10909 4.67607C1.98494 5.08879 1.95118 5.52342 2.0101 5.95036C2.54284 10.1397 4.45613 14.0322 7.44775 17.013C10.4394 19.9938 14.3388 21.8929 18.5301 22.4104H18.9101C19.6475 22.4114 20.3595 22.1409 20.9101 21.6504C21.2265 21.3674 21.4792 21.0205 21.6516 20.6327C21.8239 20.2448 21.9121 19.8248 21.9101 19.4004V16.4004C21.8979 15.7057 21.6449 15.0369 21.1944 14.508C20.744 13.9791 20.1239 13.623 19.4401 13.5004ZM19.9401 19.5004C19.9399 19.6423 19.9095 19.7827 19.8509 19.912C19.7923 20.0413 19.7068 20.1566 19.6001 20.2504C19.4884 20.3468 19.3577 20.4189 19.2165 20.462C19.0753 20.505 18.9267 20.5181 18.7801 20.5004C15.035 20.0202 11.5563 18.3068 8.89282 15.6306C6.2293 12.9545 4.53251 9.46769 4.0701 5.72036C4.05419 5.57387 4.06813 5.42569 4.1111 5.28475C4.15407 5.14381 4.22517 5.01304 4.3201 4.90036C4.41381 4.79369 4.52916 4.7082 4.65848 4.64957C4.7878 4.59095 4.92812 4.56054 5.0701 4.56036H8.0701C8.30265 4.55518 8.52972 4.63124 8.71224 4.77543C8.89476 4.91962 9.02131 5.12293 9.0701 5.35036C9.1101 5.62369 9.1601 5.89369 9.2201 6.16036C9.33562 6.6875 9.48936 7.20554 9.6801 7.71036L8.2801 8.36036C8.1604 8.41528 8.05272 8.4933 7.96326 8.58995C7.87379 8.6866 7.8043 8.79997 7.75877 8.92355C7.71324 9.04713 7.69257 9.17849 7.69795 9.31008C7.70332 9.44167 7.73464 9.5709 7.7901 9.69036C9.2293 12.7731 11.7073 15.2512 14.7901 16.6904C15.0336 16.7904 15.3066 16.7904 15.5501 16.6904C15.6748 16.6458 15.7894 16.5768 15.8873 16.4875C15.9851 16.3983 16.0643 16.2905 16.1201 16.1704L16.7401 14.7704C17.2571 14.9552 17.7847 15.1088 18.3201 15.2304C18.5868 15.2904 18.8568 15.3404 19.1301 15.3804C19.3575 15.4291 19.5608 15.5557 19.705 15.7382C19.8492 15.9207 19.9253 16.1478 19.9201 16.3804L19.9401 19.5004Z"
                        fill="#FF5B5B"
                      />
                    </svg>
                  }
                  title={userData?.data?.phone}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card"></div>
        </div>
      </div>
      <div className="    md:flex gap-4 mx-4 ">
        <div className="    ">
          <div className="clearfix">
            <div className="card card-bx profile-card author-profile m-b30">
              <div className="card-body">
                {/* <div className="p-5">
                                    <div className="author-profile">
                                        <div className="author-media">
                                            <Image src={user} alt="" height={100} width={100}/>
                                            <div className="upload-link" title="" data-toggle="tooltip" data-placement="right" data-original-title="update">
                                                <input type="file" className="update-flie" />
                                                <i className="fa fa-camera"></i>
                                            </div>
                                        </div>
                                        <div className="author-info">
                                            <h6 className="title">Nella Vita</h6>
                                            <span>Developer</span>
                                        </div>
                                    </div>
                                </div> */}
                <div className="info-list ">
                  <div className="card-header">
                    <h6 className="title">Verification</h6>
                  </div>
                  <ul className=" font-semibold m-2">
                    <li>
                      <Link href={"/app-profile"}>
                        <div className="flex items-center  ">
                          <MdEmail size={20} className="mr-3 text-[#004DEC] " />{" "}
                          Email
                        </div>
                      </Link>
                      {userData?.data?.emailVerified ? (
                        <MdVerified className=" text-green-600" />
                      ) : (
                        <MdError className=" text-orange-600" />
                      )}{" "}
                    </li>
                    <li>
                      <Link
                        href={"/uc-lightgallery"}
                        className="flex items-center  "
                      >
                        <div className="flex items-center  ">
                          <RiBankLine
                            size={20}
                            className="text-[#004DEC] mr-3"
                          />{" "}
                          Bank Details
                        </div>
                      </Link>

                      {userData?.data?.bank_status ? (
                        <MdVerified className=" text-green-600" />
                      ) : (
                        <MdError className=" text-orange-600" />
                      )}
                    </li>
                    <li>
                      <Link
                        href={"/app-profile"}
                        className="flex items-center "
                      >
                        <div className="flex items-center">
                          <MdMobileFriendly
                            size={20}
                            className="text-[#004DEC] mr-3 "
                          />{" "}
                          Mobile Verification
                        </div>
                      </Link>

                      {userData?.data?.phoneVerified ? (
                        <MdVerified className=" text-green-600" />
                      ) : (
                        <MdError className=" text-orange-600" />
                      )}
                    </li>
                    <li>
                      <Link
                        href={"/app-profile"}
                        className="flex items-center "
                      >
                        <div className="flex items-center ">
                          <AiOutlineFileProtect
                            size={20}
                            className="text-[#004DEC] mr-3"
                          />{" "}
                          Funds PassCode
                        </div>
                      </Link>

                      {userData?.data?.passcodeStatus ? (
                        <MdVerified className=" text-green-600" />
                      ) : (
                        <MdError className=" text-orange-600" />
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-footer">
                
                <div className="input-group">
                  <a
                    href="https://www.dexignzone.com/"
                    target="blank"
                    className="form-control text-primary rounded text-start bg-white"
                  >
                    https://www.dexignzone.com/
                  </a>
                </div>
              </div>
            </div>
            <div className="card card-bx profile-card author-profile m-b30">
              <div className="card-body pb-5">
                <div className="info-list ">
                  <div className="card-header">
                    <h6 className="title">Recent Activity</h6>
                  </div>
                  <ul className="">
                    {logData?.data.length === 0 ? (
                      <span> No recent records</span>
                    ) : (
                      logData?.data.slice(0,2).map((e, i) => (
                        <div className="flex flex-col border-b-1 ml-3 p-3 items-start justify-start">
                        <span className=" flex  items-center justify-center text-[#004DEC] font-semibold" ><IoLocationSharp scale={20}/> {e.location}</span>
                         <span className=" text-sm ml-5">{ new Date(e.date).toLocaleDateString()} @ {new Date(e.date).toLocaleTimeString()}</span>
                        </div>
                      ))
                    )}
                  </ul>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-8">
          <div className="card profile-card card-bx m-b30">
            <div className="card-header">
              <h6 className="title">Account setup</h6>
            </div>
            <form className="profile-form">
              <div className="card-body">
                <div className="grid lg:grid-cols-3 grid-cols-2">
                  {inputBlog.map((item, ind) => (
                    <div className=" m-3" key={ind}>
                      <label className="form-label">{item.label}</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={item.value}
                      />
                    </div>
                  ))}
                  <div className="m-3">
                    <label className="form-label">Country</label>
                    <Select
                      options={options3}
                      className="custom-react-select"
                      defaultValue={options3[0]}
                      isSearchable={false}
                    />
                  </div>
                  <div className="m-3">
                    <label className="form-label">Gender</label>
                    <Select
                      options={options2}
                      className="custom-react-select"
                      defaultValue={options2[0]}
                      isSearchable={false}
                    />
                  </div>{" "}
                  <div className="m-3">
                    <label className="form-label">DOB</label>
                    <Select
                      options={options2}
                      className="custom-react-select"
                      defaultValue={options2[0]}
                      isSearchable={false}
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary ">UPDATE</button>
                {/* <Link href={"#"} className="btn-link">
                  Forgot your password?
                </Link> */}
              </div>
            </form>
          </div>
        </div>
      </div>
          <div className=" card mx-4">
      <div className=" profile-card card-bx m-b30">
        <div className="card-header">
          <h6 className="title">KYC Verification</h6>
        </div>
        <Form className="" {...form}>

        <form className="profile-form" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="p-4">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
              <div>
              <FormField   
                control={form.control}
                name="aadhar"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Aadhar Card</FormLabel>
                    <FormControl>
                    <Input
                          className="border-gray-200 border-2"
                          // placeholder={field.placeholder}
                          {...field}
                        />
                    </FormControl>

                    <FormMessage />
                 
                  </FormItem>
                )}
              />
               <FormField className="mt-5"
            control={form.control}
            name="aadharImage"
            render={({ field: { onChange } }) => (
              <FormItem>
                <FormLabel>Aadhar Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    onChange={(e) => {
                      onChange(e.target.files[0]);
                    }}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
              </div>
              <div>
              <FormField   
                control={form.control}
                name="panCard"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pan Card</FormLabel>
                    <FormControl>
                    <Input
                          className="border-gray-200 border-2"
                          // placeholder={field.placeholder}
                          {...field}
                        />
                    </FormControl>

                    <FormMessage />
                 
                  </FormItem>
                )}
              />
               <FormField className="mt-5"
            control={form.control}
            name="panImage"
            render={({ field: { onChange } }) => (
              <FormItem>
                <FormLabel>Pan Card Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    onChange={(e) => {
                      onChange(e.target.files[0]);
                    }}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
              </div>
              <div>
              <FormField className="mt-5"
            control={form.control}
            name="selfieImage"
            render={({ field: { onChange } }) => (
              <FormItem>
                <FormLabel>Selfie</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    onChange={(e) => {
                      onChange(e.target.files[0]);
                    }}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary">
              Proceed
            </button>
          </div>
        </form>
            </Form>

      </div>
    </div>
    </>
  );
};
export default EditProfile;
