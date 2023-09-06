const express = require("express");
const cors = require("cors");
const routes = require('./routes/index');
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Nodejs-Structure application." });
});

app.use('/api', routes);

const router = require("./routes/index");
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// sync database
const db = require("./models");
/* db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });
 */
// re-sync database : sync and removed axisting data into table.
/* db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
}); */