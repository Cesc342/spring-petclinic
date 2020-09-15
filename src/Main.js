const express = require("express");
const app = express();

app.listen(8080, "localhost", () => {
    console.log("Començat");
})

app.get("/", (req, res) => {
    res.send("<script> alert('hola') </script>");
})