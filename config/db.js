const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.qi0fs.mongodb.net/mern-project",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch ((err) => ('failed to connect to MongoDB', err));