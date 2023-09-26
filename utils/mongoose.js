import mongoose from "mongoose";

async function run () {
const uri = `${process.env.DB_URI}`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
await db.once('open', () => {
    console.log('Conexión a MongoDB Atlas establecida');
});
}

export default run