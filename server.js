

const express = require('express');
const app = express();
const cors = require("cors")

const indexRoutes = require("./routes/index.routes")

app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true
}));
app.use("/api", indexRoutes)
app.use('/uploads', express.static('uploads'));
const connectDB = require('./config/db');
require('dotenv').config();

connectDB();  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
