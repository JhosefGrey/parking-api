import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.MONGO_URL;
    const DB_NAME = <string>process.env.MONGO_DB_NAME;
    await connect(DB_URI, { dbName: DB_NAME });
}

export default dbConnect;