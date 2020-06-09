var express = require('express');
const fs = require("fs");
var path = require('path');
var router = express.Router();

var exercieData = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../tool/exercise.json")));
let data = []


/* GET home page. */
router.get('/', function(req, res, next) {
    // console.log(data[0])
    res.render("content",{ eErrorBookList: data }, function(err, html) {
        // console.log(html)
        fs.writeFile('result.html', html, 'utf-8', function(error) {
            if (error) {
                console.log(error);
            }
        });
        res.write(html);
        res.end()
    });
});
router.get('/a', function(req, res, next) {
    // console.log(data[0])
    res.render("answer",{ eErrorBookList: data }, function(err, html) {
        // console.log(html)
        fs.writeFile('answer.html', html, 'utf-8', function(error) {
            if (error) {
                console.log(error);
            }
        });
        res.write(html);
        res.end()
    });
});
router.get('/f', function(req, res, next) {
    // console.log(data[0])
    res.render("front",{ eErrorBookList: data }, function(err, html) {
        // console.log(html)
        fs.writeFile('front.html', html, 'utf-8', function(error) {
            if (error) {
                console.log(error);
            }
        });
        res.write(html);
        res.end()
    });
});
router.get('/t', function(req, res, next) {
    // console.log(data[0])
    res.render("tail",{ eErrorBookList: data }, function(err, html) {
        // console.log(html)
        fs.writeFile('tail.html', html, 'utf-8', function(error) {
            if (error) {
                console.log(error);
            }
        });
        res.write(html);
        res.end()
    });
});


module.exports = router;
