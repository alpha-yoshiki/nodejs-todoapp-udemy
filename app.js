const express = require("express");
const app = express()

const taskRoute = require("./routes/tasks")

const port = 3000
// app.use(express.json());
app.use("/api/v1/tasks", taskRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`サーバーrun on port ${port}`)
})

