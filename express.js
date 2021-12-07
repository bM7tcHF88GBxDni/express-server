import express from "express";

const app = express();

const PORT = 3000 || process.env.PORT;

app.get('/', (req, res) => {
    res.send("This is the response! UPDATED")
});
  
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${ PORT }`)
});