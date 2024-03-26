const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const feedbackRouter = require("./routes/feedbackRouter");

const app = express();

// Set the port
const PORT = process.env.PORT || 3000;

// Set the views directory and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware for parsing POST request data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up routes
app.use("/", feedbackRouter);

app.use(express.static(path.join(__dirname, "assets")));

app.use("/feedback", feedbackRouter);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
