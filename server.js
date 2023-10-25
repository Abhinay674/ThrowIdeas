const express = require('express');
const path = require('path');
require('dotenv').config();
const connectDb = require('./config/db');
const PORT = process.env.PORT;


connectDb();
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the RandomIdeas API'});
})

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));