import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars server!');
});

const charRouter = require('./chars');

app.use('/chars', charRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
