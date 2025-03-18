import { QueryResult } from "pg";
import { pool } from "../config";

export class OtpService {
  async saveOtp(user_id: number, otp: string, expires_at: Date): Promise<void> {
    try {
      const query = `
      INSERT INTO ecommerce.otp (user_id, otp, expires_at)
      VALUES ($1, $2, $3)
    `;

      await pool.query(query, [user_id, otp, expires_at]);
    } catch (error) {
      console.error("Error creating otp ", error);
      throw new Error("Failed to create OTP");
    }
  }

  async getByUserId(
    user_id: number
  ): Promise<{ otp: string; expires_at: Date } | null> {
    try {
      const query = `
      SELECT otp, expires_at
      FROM ecommerce.otp
      WHERE user_id = $1
    `;

      const result: QueryResult = await pool.query(query, [user_id]);
      return result.rows.length ? result.rows[0] : null;
    } catch (error) {
      console.error("Error get otp", error);
      throw new Error("Failed to fetch OTP");
    }
  }
  async deleteByUserId(user_id: number): Promise<void> {
    try {
      const query = `
      DELETE FROM ecommerce.otp
      WHERE user_id = $1
    `;
      await pool.query(query, [user_id]);
    } catch (error) {
      console.error("Error deleting otp", error);
      throw new Error("Failed to delete OTP");
    }
  }
}
