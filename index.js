const express = require("express");
const app = express();
const port = process.env.PORT;

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const postsRoute = require("./routes/postRoute");
const commentsRoute = require("./routes/commentRoute");


app.use("/post", postsRoute);
app.use("/comment", commentsRoute);

app.listen(port, () => {
  console.log(`ex1 app is listening at http://localhost:${port}`);
});