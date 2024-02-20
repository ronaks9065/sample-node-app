const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "*",

  methods: ["POST", "GET", "PUT", "DELETE"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json({ message: "People Analytics Registration Module Is Running" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `People Analytics Registration Module is running on port ${PORT}.`
  );
});
