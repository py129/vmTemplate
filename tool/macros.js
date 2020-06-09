

'use strict';
let fs = require("fs");

let macros = {
    analyseExerciseType:function(data){
       return ['10019262','10003107','10004437','10230352','10005000'].includes(data+'')
    },
    exerciseTag:function(data){
        return ''
    },
    imgTransfer:function(data){
        return ''
    },
    eBookOptionGroupCal:function(data){
        return ''
    },
    eBookOptionCal:function(data){
        return ''
    },
    echoJoin: function(arr, str) {
        return arr.join(str);
    },
    echoArr: function(arr) {
        if (arr instanceof Array) {
            if (arr.length == 0) {
                return "无";
            } else {
                return arr.join(",");
            }
        }
    },
    parse: function(file) {
        let template = fs.readFileSync(__dirname + '/../views/' + file).toString();
        return this.eval(template);
    },
    initJson: function(str) {
        return JSON.stringify(str)
    },
    oneFloat: function(str) {
        return Number(str).toFixed(1)
    },
    hundred: function(str) {
        return Math.round(str * 100);
    },
    echo: function(html, index, tag) {
        let str = typeof html == 'string' ? html : "";
        str = str.replace(/_{10,}/g, function($1) {
            let arr = Array.apply(null, Array($1.length)).map(function(v, i) { return i % 2 == 0 ? '' : '&nbsp;' })
            return '<span style="text-decoration: underline;">' + arr.join('') + '</span>'
        })
        str = str.replace(/&nbsp;&nbsp;/g, " &nbsp;");
        str = str.trim().replace(/^<br(\/)?>/g, "");
        if (tag) {
            index += '、';
        }
        if (index) {
            str = str.match(/^<p>/i) ? str.replace(/^<p>/i, '<p>' + index) : (index + str);
        }
        return str;
    },
    mathRound: function(str) {
        if (str == 2) {
            str = 0;
        }
        return Math.round(str * 100);
    },
    mathDs: function(str, sstr) {
        return Math.round((str / sstr) * 100);
    },
    sortArr: function(str) {
        return str.reverse()
    },
    formatDate: function(str) {
        let _tm = new Date();
        if (arguments.length > 0) {
            _tm = new Date(str);
        }
        let year = _tm.getFullYear();
        let moth = _tm.getMonth() + 1;
        let date = _tm.getDate() > 9 ? _tm.getDate() : "0" + _tm.getDate();
        let hour = _tm.getHours() > 9 ? _tm.getHours() : "0" + _tm.getHours();
        let min = _tm.getMinutes() > 9 ? _tm.getMinutes() : "0" + _tm.getMinutes();
        if (moth.toString().length == 1) {
            moth = '0' + moth;
        }
        if (date.toString().length == 1) {
            moth = '0' + date;
        }
        return year + "-" + moth + "-" + date + " " + hour + ":" + min;

    }
};

module.exports = macros