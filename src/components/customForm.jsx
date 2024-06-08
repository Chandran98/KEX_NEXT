/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";

const customForm = ({
  onSubmit,
  formFieldData,
  formSchema,
  dropdownOptions,
  classBame,
  loading,
  fileUpload,
}) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    // defaultValues: defaultValues,
  });


  const myupload = async (data) => {
console.log(data);
    const formData = new FormData();
    formData.append("fileKey", data);
    console.log(formData, "formData");
    try {
      const response = await axios
        .post("http://localhost:8290/upload-file", formData, {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcHRpb24iOiJ1c2VyX2xvZ2luIiwiaWQiOiI2MzhhYzkyYjFlMmNmZDQwNDZmNjMxMzYiLCJzdGF0dXMiOnRydWUsImlhdCI6MTcxNzc2NDI0MCwiZXhwIjoxNzE3ODUwNjQwfQ.FdKmk-0CsdRZzXlkqTL4EVjvvKrvbR-e6cPmL28XsRU`,
          },
        })
        .then((res) => {
          const data= form.setValue("image", res.data);
   console.log("asdfasfsad",data);
        });

      console.log("Success:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Form className="" {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit())}
        className="space-y-8 items-center justify-center"
      >
        {formFieldData.map((e) => {
          return (
            <div key={e.id} className=" ">
              <FormField
                control={form.control}
                name={e.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{e.title}</FormLabel>
                    <FormControl>
                      {e.type === "drop" ? (
                        <Controller
                          className="flex"
                          name={field.name}
                          control={form.control}
                          render={({ field }) => (
                            <select
                              {...field}
                              className="border-gray-200 border-2 rounded-md block w-full p-2.5 "
                            >
                              {dropdownOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          )}
                        />
                      ) : (
                        <Input
                          className="border-gray-200 border-2"
                          placeholder={field.placeholder}
                          {...field}
                        />
                      )}
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          );
        })}
        {fileUpload === true ? (
          // <FormField
          //   control={form.control}
          //   name="image"
          //   render={({ field: { onChange, } }) => (
          //     <FormItem>
          //       <FormLabel>Image</FormLabel>
          //       <FormControl>
          //         <Input
          //           type="file"
          //           onChange={(e) => {
          //             onChange(e.target.files[0]);
          //             myupload(e.target.files[0]);
          //           }}
          //         />
          //       </FormControl>

          //       <FormMessage />
          //     </FormItem>
          //   )}
          // />
          <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="image"
                  render={({ field: { onChange } }) => (
                    <Input
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        onChange(file); // Update form state with file
                        myupload(file); // Call upload function
                      }}
                    />
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        ) : (
          <></>
        )}
        <Button className={`${classBame}`} type="submit">
          {loading ? "loading" : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default customForm;
