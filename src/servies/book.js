// src/models/userModel.js
import { query } from "../config/db.js";

export async function getBookById(userId) {
	const query = "SELECT * FROM books WHERE id = $1";
	const values = [userId];

	try {
		const result = await query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error fetching user by ID:", error);
		throw error;
	}
}

export async function createBook(name, email) {
	const query = `
    INSERT INTO books (name, email)
    VALUES ($1, $2)
    RETURNING *;
  `;
	const values = [name, email];

	try {
		const result = await query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error creating user:", error);
		throw error;
	}
}

export async function getAllBook() {
	const query = `
 				SELECT * FROM books;
  `;

	try {
		const result = await query(query);
		return result.rows;
	} catch (error) {
		console.error("Error creating user:", error);
		throw error;
	}
}
