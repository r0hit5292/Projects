var a = "hey";
//console.log(a);
function add(l, b) {
    return b ? l + b : l;
}
var k = add(10);
//console.log(k);
var NEWH;
(function (NEWH) {
    NEWH[NEWH["hey"] = 1] = "hey";
    NEWH[NEWH["this"] = 2] = "this";
    NEWH[NEWH["is"] = 3] = "is";
    NEWH[NEWH["me"] = 4] = "me";
})(NEWH || (NEWH = {}));
//console.log(NEWH[1]);
var newtest = "12";
var test = newtest.toUpperCase();
console.log(test);
