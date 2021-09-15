require("./db");
const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const authRouter = require("./routes/auth.routes");
const app = express();
const PORT = config.get('serverPort');
const corsMiddleware = require('./middleware/cors.middleware')

app.use(corsMiddleware);
app.use(express.json());
app.use("/api/auth", authRouter);
mongoose.connect(config.get("dbUrl"));

const start = () => {
    try {      
        app.listen(PORT, () => {
            console.log("Server started on port", PORT)
        });
    } catch(e) {

    }
}

start()