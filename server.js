/**
 * Copyright by XmT Ltd.
 * http://www.xiaomantou.net
 */

"use strict";

var express = require('express');
var app = express();
var server = require("http").Server(app);

app.use('/', express.static(__dirname + "/", {
    extensions: ["html", "htm"]
}));

server.listen(80, function () {
    console.log('XMT listening on port 80!');
});