import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    // eslint-disable-next-line no-console
    console.log(`Code running at port ${PORT}`);
})