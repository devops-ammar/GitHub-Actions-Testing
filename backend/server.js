const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
// Make a default route saying welcome at the root URL, give it styles like black background and white text, and center the text on the page
app.get("/", (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head></head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                background-color: black;
                color: white;
                text-align: center;
                padding: 20px;
            }
        </style>
    </head>
    <body>
        <h1>Welcome to the API</h1>
    </body>
</html>`);
});

const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

// MongoDB connection
/*
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
}).catch(err => console.error(err));
*/

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
