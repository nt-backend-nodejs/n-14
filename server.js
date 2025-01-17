import express from 'express';

// static file websocket.html

const app = express();

app.use(express.json());

app.use("/", (req, res) => {
  res.sendFile(import.meta.dirname + '/public/websocket.html');
})

app.listen(5000, () => {
  console.log('Server running on port : http://localhost:5000');
});
