

const express = require('express');
const app = express();

const indexRoutes = require("./routes/index.routes")

app.use(express.json());
app.use("/api", indexRoutes)
const connectDB = require('./config/db');
require('dotenv').config();

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
