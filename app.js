const express = require("express");
const app = express();
var port =  process.env.PORT || 4200;
app.get('/', (req, res) => res.send('hello world !!'));
app.listen(port, () => console.log('server is running on port ' +port));