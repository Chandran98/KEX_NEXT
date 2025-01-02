/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { kycFormSchema } from "@/utils/formSchema";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, kycUpdate } from "@/redux/reducer/user/userApi";
import { getCookie } from "cookies-next";
import { headers } from "@/constant/apiUrl";
const kycVerification = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  const { loading, userData, error } = useSelector((state) => state.user);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(kycFormSchema),
  });

  const onSubmit = (data) => {
    const formData = {
      email: userData?.data?.email,
      kyc: data,
    };
    dispatch(kycUpdate(formData));
  };
  const handleImageUpload = async (event, name) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("fileKey", file);
    try {
      console.log("form", "Data", "formData");

      const response = await axios.post(
        "http://localhost:8290/upload-file",
        formData,
        {
          headers: headers,
        }
      );
      console.log(response.data.data, "response.data.data");
      let datamy = setValue(name, response.data.data);
      console.log(datamy);
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  return (
    <div className=" card mx-4">
      <div className=" profile-card card-bx m-b30">
        <div className="card-header">
          <h6 className="title">KYC Verification</h6>
        </div>
        <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="p-4">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
              <div>
                <div>
                  <label
                    htmlFor="issueType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Pan Card
                  </label>
                  <input
                    type="text"
                    id="pannumber"
                    {...register("pannumber")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {errors.pannumber && (
                    <span className="text-red-600 text-sm">
                      {errors.pannumber.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Pan Image
                  </label>
                  <input
                    type="file"
                    id="pan"
                    onChange={(data) => handleImageUpload(data, "pan")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {errors.pan && (
                    <span className="text-red-600 text-sm">
                      {errors.pan.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <div>
                  <label
                    htmlFor="issueType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Aadhar Card
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register("proofnumber")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {errors.proofnumber && (
                    <span className="text-red-600 text-sm">
                      {errors.proofnumber.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Front Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    onChange={(data) => handleImageUpload(data, "front")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {errors.front && (
                    <span className="text-red-600 text-sm">
                      {errors.front.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Back Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    onChange={(data) => handleImageUpload(data, "back")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {errors.back && (
                    <span className="text-red-600 text-sm">
                      {errors.back.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <div>
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Selfie
                  </label>
                  <input
                    type="file"
                    id="image"
                    onChange={(data) => handleImageUpload(data, "selfie")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {errors.selfie && (
                    <span className="text-red-600 text-sm">
                      {errors.selfie.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary">
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default kycVerification;

