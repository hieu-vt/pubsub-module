"use strict";
exports.__esModule = true;
var modules_1 = require("../src/modules");
function TestFunction() {
    // Accumulate
    console.log('([1,2,3]) :>> ', (0, modules_1.onAccumulate)([1, 2, 3]));
}
TestFunction();
