import app from "./app.js";
import run from "./utils/mongoose.js";

async function main () {
    try {
        console.log('starting...');
        const port = process.env['PORT'] || 3000;
        await run().catch(console.dir);
        await app.listen(port)
        console.log(`server on port ${port}`);
    } catch (error) {
        console.error(error);
    }
}

main()