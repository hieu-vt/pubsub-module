"use strict";
exports.__esModule = true;
exports.onAccumulate = void 0;
var onAccumulate = function (data) {
    return (data || []).reduce(function (a, b) { return a + b; });
};
exports.onAccumulate = onAccumulate;
