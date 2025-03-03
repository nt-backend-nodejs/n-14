import express from "express";
import { setUp } from "./servies/setup.js";
import { bookRouter, authorRouter, categoryRouter } from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/setup", (req, res, next) => {
	setUp();
});

app.use("/books", bookRouter);
app.use("/authors", authorRouter);
// app.use("/bookauthors");
app.use("/categories", categoryRouter);
// app.use("/customers");
// app.use("/orders");
// app.use("/orderitems");

//error handler
app.use((err, req, res, next) => {
	if (err) {
		res.send(err);
	}

	res.status(500).send("server error");
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
