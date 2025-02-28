import pg from "pg";
const { Pool } = pg;

const client = new Pool({
  user: "postgres",
  password: "1532", //yuor code
  host: "localhost",
  port: 5432,
  database: "nodejs",
});

// const a = 1;
// // const result = await client.query(`SELECT * from customer where id = ${a}`);÷
// const result = await client.query(`SELECT * from customer where id = $1`, [a]);
// console.log(result.rows);

// const result = await client.query("SELECT $1::text as name", ["brianc"]);
// const result = await client.query(`SELECT  ${brianc} as name``);

// console.log(result.rows);
function setUpTable = () => {

  const text = `
  CREATE TABLE "User"(
      "id" SERIAL NOT NULL,
      "name" VARCHAR(255) NOT NULL,
      "email" VARCHAR(255) NOT NULL,
      "phone_number" VARCHAR(255) NOT NULL,
      "isActive" BOOLEAN NOT NULL,
      "gender" VARCHAR(255) CHECK
          ("gender" IN('')) NOT NULL
  );
  ALTER TABLE
      "User" ADD PRIMARY KEY("id");
  CREATE INDEX "user_name_index" ON
      "User"("name");
  CREATE INDEX "user_email_index" ON
      "User"("email");
  ALTER TABLE
      "User" ADD CONSTRAINT "user_phone_number_unique" UNIQUE("phone_number");
  CREATE TABLE "Product"(
      "id" SERIAL NOT NULL,
      "name" VARCHAR(255) NOT NULL,
      "type" VARCHAR(255) NOT NULL,
      "price" DECIMAL(8, 2) NOT NULL,
      "quantity" SMALLINT NOT NULL
  );
  ALTER TABLE
      "Product" ADD PRIMARY KEY("id");
  CREATE TABLE "Order"(
      "id" SERIAL NOT NULL,
      "order_date" DATE NOT NULL,
      "user_id" INTEGER NOT NULL,
      "product_id" INTEGER NOT NULL
  );
  ALTER TABLE
      "Order" ADD PRIMARY KEY("id");
  ALTER TABLE
      "Order" ADD CONSTRAINT "order_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "User"("id");
  ALTER TABLE
      "Order" ADD CONSTRAINT "order_product_id_foreign" FOREIGN KEY("product_id") REFERENCES "Product"("id");
  `;

  const res = await client.query(text);
}
//
// //
// const text =
//   "INSERT INTO PERSON(name, AGE, GENDER, ISACTIVE) VALUES($1, $2, $3, $4) RETURNING *";
// const values = ["JOHN", 12, "MALE", false];

// const res = await client.query(text, values);
// console.log(res);



// app.get("/setup", ()=>{
//     setUpTable()
// })



app.post("/user", (req, res)=>{
  const body = req

  const text= `insert into "user" (name, age, gender, email, isActive) values ($1, $2, $3, $4, $5) RETURNING *`
  // const values = ["JOHN", 12, "MALE", "JOHM@GMAIL.COM", false];

  const values = [body.name, body.age, body.gender, body.email, body.isActive];

  const result = await client.query(text, values);
  console.log(res);

  res.json(result.rows)
})
