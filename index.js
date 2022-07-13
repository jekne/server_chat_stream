


require("dotenv").config({ path: __dirname + "/.env" });
// import express
const express = require('express')
const corsMiddleWare = require("cors");

// create server
const app = express()
app.use(express.json());
app.use(corsMiddleWare());
// 3000 is common
// const PORT = 3000
const PORT = 3001
//process.env["PORT"];
const API_KEY = process.env["API_KEY"];
const API_SECRET = process.env["API_SECRET"];

const StreamChat = require("stream-chat").StreamChat;

const serverClient = StreamChat.getInstance(API_KEY, API_SECRET);

const tokenRouter = require("./routers/tokenRoute")


 app.use("/token", tokenRouter);
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });

