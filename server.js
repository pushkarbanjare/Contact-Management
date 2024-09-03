// used required files
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

//database connection established
connectDb();

const app = express();
const port = process.env.PORT || 5000;

// MIDDLEWARE - .use() is used for middlewares
// parser to accept data from the client to server
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

// server is listening
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});