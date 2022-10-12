"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
function helloWorld() {
    console.log('Hello world!');
}
exports.helloWorld = helloWorld;
var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
helloWorld();
console.log(testArray.reduce(function (p, c) { return p + c; }, 0));
//# sourceMappingURL=helloworld.js.map