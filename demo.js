
var fs = require('fs')

var dirName = process.argv[2] // 你传的参数是从第 2 个开始的

fs.mkdirSync("./" + dirName) // mkdir $1
process.chdir("./" + dirName) // cd $1
fs.mkdirSync('css') // mkdir css
fs.mkdirSync('js') // mkdir js

var dataHtml = '<!DOCTYPE>' +
 '<title>Hello</title>'+
 '<h1>Hi</h1>';
var dataCss = 'h1{color: red;}';
var dataJs = 'var string = "Hello World"\n'+
 'alert(string)';
fs.writeFileSync("./index.html", dataHtml);
fs.writeFileSync("css/style.css", dataCss);
fs.writeFileSync("./js/main.js", dataJs);

process.exit(0)