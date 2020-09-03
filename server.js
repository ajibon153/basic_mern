const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// url mongoo db
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connected succesfully");
});

const exerciseRouter = require("./routes/exercise");
const userRouter = require("./routes/users");

app.use("/exercise", exerciseRouter);
app.use("/user", userRouter);
// app.use("/", () => {
//   console.log("hai");
// });

app.listen(port, () => {
  console.log(`Server runinng port :${port}`);
});
