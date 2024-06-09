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

export const bankFormSchema = z
  .object({
    holder: z.string().trim().min(1, { message: "Required" }),
    branch: z.string().trim().min(1, { message: "Required" }),
    bank: z.string().trim().min(1, { message: "Required" }),
    account: z.string().trim().min(1, { message: "Required" }),
    ifsc: z.string().trim().min(1, { message: "Required" }),
    confirmaccount: z.string().trim().min(1, { message: "Required" }),
    upi: z.string().optional(),
    image: z.any()
      // .instanceof(File)
      // .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      //   message: ".jpg, .jpeg, .png and .webp files are accepted.",
      // })
      // .refine((file) => file.size <= MAX_FILE_SIZE, {
      //   message: "Max image size is 5MB.",
      // }),
  })
  .refine(({ account, confirmaccount }) => account === confirmaccount, {
    message: "Account doesn't match confirm Account",
    path: ["confirmaccount"],
  });

  export const accountUpdateSchema = z
  .object({
    username: z.string().trim().min(1, { message: "Required" }),
    fname: z.string().trim().min(1, { message: "Required" }),
    lname: z.string().trim().min(1, { message: "Required" }),
    age: z.string().trim().min(1, { message: "Minimum 18" }),
    address: z.string().trim().min(1, { message: "Required" }),
    city: z.string().trim().min(1, { message: "Required" }),
    state: z.string().trim().min(1, { message: "Required" }),
    postalcode: z.string().trim().min(1, { message: "Required" }),
    dob: z.string().trim().min(1, { message: "Required" }),
    country: z.string().trim().min(1, { message: "Required" }),
    gender: z.string().trim().min(1, { message: "Required" })})
  ;
  
export const ticketFormSchema = z.object({
  issueType: z.string({ message: "Required" }).trim(),
  subject: z.string().trim().min(1, { message: "Required" }),
  description: z.string().trim().min(1, { message: "Required" }),
  image: z
    .instanceof(File)
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: ".jpg, .jpeg, .png and .webp files are accepted.",
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "Max image size is 5MB.",
    }),
});


export const kycFormSchema = z.object({
  aadhar: z.string().trim().min(1, { message: "Required" }),
  panCard: z.string().trim().min(1, { message: "Required" }),
  aadharImage: z.instanceof(File)
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: ".jpg, .jpeg, .png and .webp files are accepted.",
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "Max image size is 5MB.",
    }),
  panImage: z.instanceof(File)
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: ".jpg, .jpeg, .png and .webp files are accepted.",
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "Max image size is 5MB.",
    }),
  selfieImage: z.instanceof(File)
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: ".jpg, .jpeg, .png and .webp files are accepted.",
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "Max image size is 5MB.",
    }),
});
