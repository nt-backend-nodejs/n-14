import pool from "../config/db.js";

export async function createUser(user) {
	const query = `
    INSERT INTO Customers (first_name, last_name, email, phone, address)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
	const values = [
		user.firstName,
		user.lastName,
		user.email,
		user.phone,
		user.address,
	];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error creating user:", error);
		throw error;
	}
}

export async function getAllUser() {
	const query = `
    select * from  Customers; 
  `;

	try {
		const result = await pool.query(query);
		return result.rows;
	} catch (error) {
		console.error("Error creating user:", error);
		throw error;
	}
}

export async function getCategotyById(userId) {
	const query = "SELECT * FROM Customers WHERE customer_id = $1";
	const values = [userId];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error fetching user by ID:", error);
		throw error;
	}
}
