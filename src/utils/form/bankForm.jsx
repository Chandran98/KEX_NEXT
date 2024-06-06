/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bankFormSchema } from "@/utils/formSchema";


const bankForm = ({formFieldData,  onSubmit,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(bankFormSchema),
      });
  return (
   <form onSubmit={handleSubmit(onSubmit())}>
      {formFieldData.map((e,i)=>(
         <div key={i}>
         <label>{e.title}</label>
         <Input placeholder={e.placeholder} {...register(e.name)} />

         {errors.holder && <span className=" text-red-700" >{errors.message}</span>}
       </div>
      ))}
      <button type="submit">Submit</button>
   </form>
  )
}

export default bankForm