const express = require("express");
const mongoose = require("mongoose");
// require ("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
(error) => {
  const connectionStatus = !error ? 'Success': 'Error Connecting to database';
  console.log(connectionStatus);
});

// routes
app.use(require("./routes/api.js"));

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Aligator listening on: http://localhost:" + PORT);
  });
