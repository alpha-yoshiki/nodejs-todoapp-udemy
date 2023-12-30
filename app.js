const express = require("express");
const app = express()

const taskRoute = require("./routes/tasks")
const connectDB =require("./db/connect")
require("dotenv").config()

const port = 3000
app.use(express.json());
app.use(express.static("./public"))

// path routing
app.use("/api/v1/tasks", taskRoute);

// connect DB
const start = async() => {
    try {
        await connectDB(
            process.env.MONGO_URL
            );
    } catch (err) {
        console.log(err);
    }
};
start();

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`サーバーrun on port ${port}`)
})

