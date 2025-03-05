import { createUser } from "../servies/index.js";

export const authController = {
	async signup(req, res, next) {
		try {
			const body = req.body;
			const createdUser = await createUser(body);

			res.send(createdUser);
		} catch (error) {
			next(error);
		}
	},
	signin(req, res, next) {},
	profile(req, res, next) {},
};
