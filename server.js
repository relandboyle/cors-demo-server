import express from 'express';
import cors from 'cors';

const app = express();

const PORT = 3333;

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001']
}));

app.get("/data", (req, res) => {
  res.send({ message: "Hello from the Server!" });
  console.log("Data requested");
});


app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
