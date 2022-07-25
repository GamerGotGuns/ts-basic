import express from "express";
import { z } from "zod";

const router = express.Router();

const UserSchema = z.object({
	name: z.string().min(4),
	city: z.string().min(4),
});

// type UserType = z.infer<typeof UserSchema>;

const user = [
	{
		name: "A",
		city: "New York",
	},
	{
		name: "B",
		city: "Nashik",
	},
];

router.get("/", (req, res) => {
	return res.json(user);
});

router.get("/add", (req, res) => {
	const check = UserSchema.safeParse(req.query);

	if (!check.success) {
		const formatted = check.error.format();
		return res.json(formatted);
	}

	const { name, city } = check.data;

	user.push({ name, city });
	return res.json(user);
});

export default router;
