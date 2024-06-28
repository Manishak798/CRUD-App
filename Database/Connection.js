import { mongodbURI } from "../config.js";
import mongoose from "mongoose";

//Connecting to MongoDB Database

export const ConnectionDB = mongoose.connect(mongodbURI).then(() => {
    console.log('MongoDB Connected');
})
    .catch((error) => {
        console.log(`Error: `, { error: message });
    })
