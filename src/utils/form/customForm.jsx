"use client";
// components/IssueForm.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";

const CustomForm = ({
  onSubmit,
  formFiledData,
  loading,
  fileUpload,
  dropdownOptions,
  imgName,
  formSchema,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [imageData, setImageData] = useState(null);
  const handleImageUpload = async (event) => {
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
      setImageData(response.data.data);
      setValue(imgName, response.data.data);
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit())}
      className="max-w-md mx-auto p-4 space-y-4"
    >
      {formFiledData.map((e, i) => (
        <div key={i}>
          {e.type === "drop" ? (
            <div key={i}>
              <label
                htmlFor="issueType"
                className="block text-sm font-medium text-gray-700"
              >
                {e.title}
              </label>
              <select
                id="issueType"
                {...register(e.name)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                {dropdownOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
                {/* <option value="">Select issue type</option>
                <option value="Deposit Issue">Deposit Issue</option>
                <option value="Withdrawal Issue">Withdrawal Issue</option>
                <option value="Account Issue">Account Issue</option> */}
              </select>
              {errors[e.name] && (
                <span className="text-red-600 text-sm">
                  {errors[e.name].message}
                </span>
              )}
            </div>
          ) : (
            <div>
              <label
                htmlFor="issueType"
                className="block text-sm font-medium text-gray-700"
              >
                {e.title}
              </label>
              <input
                type="text"
                id="subject"
                {...register(e.name)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors[e.name] && (
                <span className="text-red-600 text-sm">
                  {errors[e.name].message}
                </span>
              )}
            </div>
          )}
        </div>
      ))}
      {fileUpload && (
        <div className="">
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              type="file"
              id={imgName}
              onChange={handleImageUpload}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.name && (
              <span className="text-red-600 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className=" align-middle flex items-center justify-center m-3">
            {imageData === null ? (
              <span> no Image Uploaded</span>
            ) : (
              <Image src={imageData} alt="#" height={100} width={100} />
            )}
          </div>
        </div>
      )}
      <button
        type="submit"
        className="w-full bg-[#004dec] text-white p-2 rounded-md"
      >
        {loading ? "loading" : "Submit"}
      </button>
    </form>
  );
};

export default CustomForm;
