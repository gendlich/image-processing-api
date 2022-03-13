"use strict";
var express = require('express');
var app = express();
var port = 3000;
app.get('/api', function (req, res) {
    res.send('Hello World32131232!');
});
app.listen(port, function () {
    console.log("App listening on port ".concat(port));
});
