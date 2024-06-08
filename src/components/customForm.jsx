/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";

const customForm = ({
  onSubmit,
  formFieldData,
  formSchema,
  defaultValues,
  dropdownOptions,
  classBame,
  loading,
  fileUpload,
}) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    // defaultValues: defaultValues,
  });
  console.log(fileUpload, "fileUpload");
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
          <FormField
            control={form.control}
            name="image"
            render={({ field: { onChange } }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
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
