const express = require("express");
const path = require("path");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

// Catch-all: para SPA, devuelve index.html en rutas no estáticas
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.get("/", (req, res) => {
    res.status(200).send("All Good!");
})

app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
