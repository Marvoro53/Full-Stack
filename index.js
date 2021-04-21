// Server Setup
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = 3000;
//Start Server 
app.listen(PORT, () => console.log(`notes-app listening on port ${PORT}`));
//
