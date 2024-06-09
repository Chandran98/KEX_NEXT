/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { kycFormSchema } from '@/utils/formSchema';
import axios from 'axios';
const kycVerification = () => {

      const {handleSubmit,register,setValue,formState:{errors}} = useForm({
        resolver: zodResolver(kycFormSchema),
      });
      
  const onSubmit = (data) => {
    console.log("e.target.value", data);
  };
  const handleImageUpload = async (event,name) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("fileKey", file);
    try {
      console.log("form", "Data", "formData");

      const response = await axios.post(
        "http://localhost:8290/upload-file",
        formData,
        {
          headers: {
            Authorization: localStorage.getItem("auth-token"),
          },
        }
      );
      console.log("espo",response.data.data)
      setValue(name, response.data.data);
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
      <form
          className="profile-form"
          onSubmit={handleSubmit(onSubmit)}
        >
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
                id="subject"
                {...register("panCard")}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.panCard && (
                <span className="text-red-600 text-sm">
                  {errors.panCard.message}
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
                id="image"
                onChange={(data)=>handleImageUpload(data,"panImage")}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.panImage && (
                <span className="text-red-600 text-sm">
                  {errors.panImage.message}
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
                {...register("aadhar")}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.aadhar && (
                <span className="text-red-600 text-sm">
                  {errors.aadhar.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
               Aadhar Image
              </label>
              <input
                type="file"
                id="image"
                onChange={(data)=>handleImageUpload(data,"aadharImage")}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.aadharImage && (
                <span className="text-red-600 text-sm">
                  {errors.aadharImage.message}
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
                onChange={(data)=>handleImageUpload(data,"selfieImage")}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.selfieImage && (
                <span className="text-red-600 text-sm">
                  {errors.selfieImage.message}
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
  )
}

export default kycVerification