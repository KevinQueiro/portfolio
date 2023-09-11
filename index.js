import app from "./app.js";
import { connctToDB } from "./utils/mongoose.js";

async function main () {
    try {
        const port = process.env['PORT'];
        await connctToDB();
        app.listen(port)
        console.log(`server on port ${port}`);
    } catch (error) {
        console.error(error);
    }
}

main()