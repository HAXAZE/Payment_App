const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes");
const router = require("./routes");


const app = express();

app.use(cors());
app.use(express.json());


app.use("/app/v1",rootRouter);

module.exports = router

app.listen(3000);