var greeter = require('./src/index');
var $ = require('jquery');
document.querySelector("#app").appendChild(greeter());
//var div1 = document.getElementById("#app");
$("#app").css({"background-color" : "red"});

