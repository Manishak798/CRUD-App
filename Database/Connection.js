import { mongodbURI } from "../config.js";
import mongoose from "mongoose";



export const ConnectionDB = mongoose.connect(mongodbURI).then(() => {
    console.log('MongoDB Connected');
})
    .catch((error) => {
        console.log(`Error: `, { error: message });
    })