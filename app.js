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

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
