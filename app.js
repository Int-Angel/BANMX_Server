const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Servidor BANMX");
});

//http://localhost:3000/descargar/?id=1234
app.get("/descargar", (req, res) => {
  console.log("id: " + req.query.id);
});

app.listen(port, () => {
  console.log(`App en puerto: ${port}`);
});
