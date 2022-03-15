const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { DB_URL } = require("./constants");
const authRouter = require("./routes/auth");
const itemsRouter = require("./routes/items");

const app = express();

// Connecting with local MongoDB with URL, setting useNewUrlParser to true to avoid warning
mongoose.connect(DB_URL, { useNewUrlParser: true });
const con = mongoose.connection;
con.on("open", () => {
  console.log("DB Connected...");
});

// Application Middlewares
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/items", itemsRouter);

// Port Configuration
app.listen(5000, () => {
  console.log("API is running on port 5000...");
});
