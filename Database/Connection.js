import { mongodbURI } from "../config.js";
import mongoose from "mongoose";

//connecting to DB

export const ConnectionDB = mongoose.connect(mongodbURI).then(() => {
    console.log('MongoDB Connected');
})
    .catch((error) => {
        console.log(`Error: `, { error: message });
    })
