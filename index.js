// Server Setup
const express = require("express");
const app = express();
//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//
//Port
const PORT = 3000;
//

//Start Server 
app.listen(PORT, () => console.log(`Book app listening on port ${PORT}`));
//
