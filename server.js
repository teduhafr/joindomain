const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();

global.__basedir = __dirname;

var corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Backend App Join Domain AP" });
});


const db = require("./src/model/index");
db.sequelize.sync({alter:true});

require('./src/routes/kirim.routes.js')(app);
//require('./src/routes/aplikasi.routes.js')(app);
//require('./src/routes/upload.routes.js')(app);
//require('./src/routes/backend.routes.js')(app);



const PORT = process.env.PORT;
app.listen(PORT,  () => {
    console.log(`Server is running on port ${PORT}.`);
});