
'use strict';

var fs = require("fs");
var Velocity = require("velocityjs");
var macros = require("./macros.js");

function engine(path, options, fn) {
    let template = fs.readFileSync(path).toString();
    try {
        fn(null, Velocity.render(template, options, macros))
    } catch (err) {
        fn(err)
    }
}
module.exports = {
    engine: engine
}