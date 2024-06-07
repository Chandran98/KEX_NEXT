import { z } from "zod";

const MAX_FILE_SIZE = 2000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const bankFormSchema = z
  .object({
    holder: z.string().trim().min(1, { message: "Required" }),
    branch: z.string().trim().min(1, { message: "Required" }),
    bank: z.string().trim().min(1, { message: "Required" }),
    account: z.string().trim().min(1, { message: "Required" }),
    ifsc: z.string().trim().min(1, { message: "Required" }),
    confirmaccount: z.string().trim().min(1, { message: "Required" }),
    upi: z.string().optional(),
    image: z.instanceof(File)
      .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
        message: ".jpg, .jpeg, .png and .webp files are accepted.",
      })
      .refine((file) => file.size <= MAX_FILE_SIZE, {
        message: "Max image size is 5MB.",
      }),
  })
  .refine(({ account, confirmaccount }) => account === confirmaccount, {
    message: "Account doesn't match confirm Account",
    path: ["confirmaccount"],
  });

export const ticketFormSchema = z.object({
  issueType: z.string({ message: "Required" }).trim(),
  subject: z.string().trim().min(1, { message: "Required" }),
  description: z.string().trim().min(1, { message: "Required" }),
  image: z.instanceof(File)
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: ".jpg, .jpeg, .png and .webp files are accepted.",
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "Max image size is 5MB.",
    }),
});
