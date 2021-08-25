const express = require("express");
const fs = require("fs");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//Setting up express app and the port
const app = express();
const PORT = process.env.PORT || 3001;

//Setting up express app to handle datat parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

// Route configuration
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Listening for the port when the server is run in the terminal
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
