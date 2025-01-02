/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { accountUpdateSchema } from "@/utils/formSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfile } from "@/redux/reducer/user/userApi";
import { useDispatch, useSelector } from "react-redux";

const formFieldData = [
  { title: "User Name", name: "username", type: "text" },
  { title: "First Name", name: "firstname", type: "text" },
  { title: "Last Name", name: "lastname", type: "text" },
  { title: "Age", name: "age", type: "text" },
  { title: "Address", name: "address", type: "text" },
  { title: "City", name: "city", type: "text" },
  { title: "State", name: "state", type: "text" },
  { title: "Postal Code", name: "pincode", type: "text" },
  { title: "DOB", name: "dob", type: "date" },
];

const genderdropdownOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];
const options3 = [
  { value: "Russia", label: "Russia" },
  { value: "Canada", label: "Canada" },
  { value: "China", label: "China" },
  { value: "India", label: "India" },
];

const account = () => {
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(accountUpdateSchema),
  });

  const onSubmit = async (data) => {
    dispatch(updateProfile(data));
  };

  return (
    <div className="col-xl-9 col-lg-8">
      <div className="card profile-card card-bx m-b30">
        <div className="card-header">
          <h6 className="title">Account setup</h6>
        </div>
        <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="card-body">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              {formFieldData.map((item, ind) => (
                <div className=" m-3" key={ind}>
                  <label className="form-label">{item.title}</label>
                  <input
                    {...register(item.name)}
                    type={item.type}
                    className="form-control"
                    //   defaultValue={item.value}
                  />
                  {errors[item.name] && (
                    <span className="text-red-600 text-sm">
                      {errors[item.name].message}
                    </span>
                  )}
                </div>
              ))}
              <div className="m-3">
                <label
                  htmlFor="issueType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <select
                  id="issueType"
                  {...register("country")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  {options3.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <span className="text-red-600 text-sm">
                    {errors.country.message}
                  </span>
                )}
              </div>
              <div className="m-3">
                <label
                  htmlFor="issueType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
                <select
                  // id="issueType"
                  {...register("gender")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  {genderdropdownOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.gender && (
                  <span className="text-red-600 text-sm">
                    {errors.gender.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary ">
              {loading ? "Updating" : "UPDATE"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default account;
