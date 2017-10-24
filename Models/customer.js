"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_formatter_1 = require("../utilities/object-formatter");
class Customer {
    constructor(id, name, address, credit, status) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.credit = credit;
        this.status = status;
    }
    toString() {
        return object_formatter_1.default.format(this);
    }
}
exports.default = Customer;
