require("./db");

const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const authRouter = require("./routes/auth.routes");
const app = express();
const PORT = config.get('serverPort');

app.use(express.json())
app.use("/api/auth", authRouter);
// mongoose.connect(config.get("dbUrl"));

const start = () => {
    try {
        

        // app.get('/api/auth/registration', (req, res) => {
        //     res.send('Hello World!')
        //   })

         
        app.listen(PORT, () => {
            console.log("Server started on port", PORT)
        });
    } catch(e) {

    }
}

start()