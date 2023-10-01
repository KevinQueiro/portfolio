import mongoose from "mongoose";

async function run() {
    const uri = `${process.env.DB_URI}`;

    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
        console.log('Connection to MongoDB Atlas established');
    });
}

export default run