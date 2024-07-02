import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const signInFormSchema = z.object({
  email: z.string({ message: "Required" }).trim(),
  password: z.string().trim().min(1, { message: "Required" }),
});

export const bankFormSchema = z.object({
  holder: z.string().trim().min(1, { message: "Required" }),
  branch: z.string().trim().min(1, { message: "Required" }),
  bankname: z.string().trim().min(1, { message: "Required" }),
  accNumber: z.string().trim().min(1, { message: "Required" }),
  ibanCode: z.string().trim().min(1, { message: "Required" }),
  account_type: z.string().trim().min(1, { message: "Required" }),
  Upi_id: z.string().optional(),
  proof: z.any(),
  // .instanceof(File)
  // .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
  //   message: ".jpg, .jpeg, .png and .webp files are accepted.",
  // })
  // .refine((file) => file.size <= MAX_FILE_SIZE, {
  //   message: "Max image size is 5MB.",
  // }),
});
// .refine(({ account, confirmaccount }) => account === confirmaccount, {
//   message: "Account doesn't match confirm Account",
//   path: ["confirmaccount"],
// })

export const accountUpdateSchema = z.object({
  username: z.string().trim().min(1, { message: "Required" }),
  firstname: z.string().trim().min(1, { message: "Required" }),
  lastname: z.string().trim().min(1, { message: "Required" }),
  age: z.string().trim().min(1, { message: "Minimum 18" }),
  address: z.string().trim().min(1, { message: "Required" }),
  city: z.string().trim().min(1, { message: "Required" }),
  state: z.string().trim().min(1, { message: "Required" }),
  pincode: z.string().trim().min(1, { message: "Required" }),
  dob: z.string().trim().min(1, { message: "Required" }),
  country: z.string().trim().min(1, { message: "Required" }),
  gender: z.string().trim().min(1, { message: "Required" }),
});

export const ticketFormSchema = z.object({
  issueType: z.string({ message: "Required" }).trim(),
  subject: z.string().trim().min(1, { message: "Required" }),
  description: z.string().trim().min(1, { message: "Required" }),
  image: z
    .any()
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: ".jpg, .jpeg, .png and .webp files are accepted.",
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "Max image size is 5MB.",
    }),
});

export const kycFormSchema = z.object({
  proofnumber: z.string().trim().min(1, { message: "Required" }),
  pannumber: z.string().trim().min(1, { message: "Required" }),
  front: z.any({ message: "Required" }),
  back: z.any({ message: "Required" }),
    // .instanceof(File)
    // .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
    //   message: ".jpg, .jpeg, .png and .webp files are accepted.",
    // })
    // .refine((file) => file.size <= MAX_FILE_SIZE, {
    //   message: "Max image size is 5MB.",
    // }),
  pan: z.any({ message: "Required" }),
  selfie:z.any({ message: "Required" }),
});

export const swapSchema = z.object({
  spend_amt: z.string().trim().min(1, { message: "Required" }),
  buyamount: z.string().trim().min(1, { message: "Required" }),
  buycurrency: z.string().trim().min(1, { message: "Required" }),
  spentcurrency: z.string().trim().min(1, { message: "Required" }),
  
});

 
export const tradeschema = z.object({
  price: z.any().optional(),
  amount: z.number({ message: "Required" }),
  ordertype: z.string().optional(),
  pair: z.string().optional(),
  type: z.string().optional(),
  total: z.number({ message: "Required" }),
});

export const cryptoWithdrawalSchema = z.object({
  amount: z.string().min(1, { message: "required" }),
  address: z.string().min(1, { message: "required" }),
  description: z.string().min(1, { message: "required" }),
});