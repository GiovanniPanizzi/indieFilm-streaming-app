const express = require('express');
const app = express();
const PORT = 3000;

const cors = require("cors");

app.use(cors());

app.use(express.json());

const data = [
{ id: 1, name: "Giovanni" },
{ id: 2, name: "Cesare" }
];

//example api
app.get("/requestdata", (req, res) => {
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server in ascolto su http://localhost:${PORT}`);
});