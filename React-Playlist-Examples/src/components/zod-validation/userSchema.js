import { z } from "zod";

export const userSchema = z.object({
    fullName: z
        .string()
        .min(3, { message: "Full Name must be at least 3 characters long" })
        .max(50, { message: "Full Name must be at most 50 characters long" }),
    email: z
    .email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters long" })
        .max(100, { message: "Password must be at most 100 characters long" }),
    age: z
        .number()
        .min(18, { message: "Age must be at least 18" })
        .max(120, { message: "Age must be at most 120" }),
});

