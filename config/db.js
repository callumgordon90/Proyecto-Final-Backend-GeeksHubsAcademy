const mongoose = require ("mongoose");

mongoose
    .connect('mongodb+srv://mern:mernproject@cluster0.qi0fs.mongodb.net/mern-project',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
    )
    .then(() => console.log('Connected to MongoDB'));