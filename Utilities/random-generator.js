"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DEFAULT_MINIMUM = 1;
const DEFAULT_MAXIMUM = 100000;
class RandomGenerator {
    static generateRandom(minimum = DEFAULT_MINIMUM, maximum = DEFAULT_MAXIMUM) {
        let randomNumber = Math.floor(Math.random() * (maximum - minimum) + minimum);
        return randomNumber;
    }
}
exports.default = RandomGenerator;
