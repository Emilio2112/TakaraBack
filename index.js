process.stdout.write('\x1B[2J\x1B[0f') // Clear terminal screen
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const router = require('./api/routers/index')

const mongooseStart = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/",
        {
            dbName: process.env.MONGO_DB || "takarabako",
        }
        )
        console.log("connected to DB")
    } catch (error) {
        console.log(`Error connectirng to DB: ${error}`);
    }
};

mongooseStart()

try {
    app
        .use(morgan('dev'))
        .use(cors())
        .use(express.json())
        .use('/api', router)
        .listen(3000, (err) => {
            console.info("\n\n" + ">".repeat(40));
            console.info('💻  Takarabako');
            console.info('📡  PORT: http://localhost:3000');
            console.info(">".repeat(40) + "\n\n");
        });
    
} catch (error) {
    console.log(`Error launching Server: ${err}`);
}

