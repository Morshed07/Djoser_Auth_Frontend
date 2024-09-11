import { z } from "zod"

// Define the Zod schema
export const logInFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Please enter a valid password",
  }),
})
