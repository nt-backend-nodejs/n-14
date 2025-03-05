import z from "zod";

export const signUpSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	email: z.string().email(),
	phone: z.string(),
	address: z.string(),
});
