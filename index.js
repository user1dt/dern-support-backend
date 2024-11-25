const express = require("express");
const groupRoutes = require("./routes/mainRoute");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv")
const port = 3000;

app.use(cors());
dotenv.config();

//for json support middlware

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
})),

groupRoutes(app) // register routes

// middleware to authenticate requests



//listening port

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
