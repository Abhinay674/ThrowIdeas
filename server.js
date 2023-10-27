const express = require('express');
const path = require('path');
require('dotenv').config();
const connectDb = require('./config/db');
const PORT = process.env.PORT;
const cors = require('cors');


connectDb();
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
  origin: ['http://localhost:5000', 'http://localhost:3000'],
  credentials: true
}))
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the RandomIdeas API'});
})

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));