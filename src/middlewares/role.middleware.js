export const roleGuard = (...roles) => {
	// ["admin", "superadmin"]
	return async (req, res, next) => {
		try {
			const userRoles = req.user.role; // "user"

			if (!roles.includes(userRoles)) {
				return res.send("Your roles are not allowed to access this route");
			}
			next();
		} catch (error) {
			res.send(error);
		}
	};
};

// Middleware == roleGuard("admin", "superadmin");
