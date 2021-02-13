const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")
const saveRouter = require("./routes/request.routes")
const app = express()
const PORT = config.get('serverPort')
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/req", saveRouter)

const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"))

        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {

    }
}

start()