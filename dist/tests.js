"use strict";
exports.__esModule = true;
var prophecies_1 = require("./prophecies");
function assert(condition, message) {
    if (!condition) {
        throw new Error(message || 'Assertion failed');
    }
}
function it(message, test) {
    try {
        test();
        console.log('\x1b[32m%s\x1b[0m', "\u2713 " + message);
    }
    catch (e) {
        console.log('\n');
        console.log('\x1b[31m%s\x1b[0m', "\u2717 " + message);
        console.error(e);
    }
}
it('should return a string', function () {
    assert(typeof (0, prophecies_1.foretell)() === 'string');
});
