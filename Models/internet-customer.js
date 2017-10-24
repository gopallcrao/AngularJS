"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("./customer");
const Object_formatter_1 = require("../Utilities/Object-formatter");
const DELIMITER = ',';
const ARGUMENT_EXCEPTION = 'hi i am failed';
class InternetCustomer extends customer_1.default {
    constructor(id, name, address, credit, status, blogurl) {
        super(id, name, address, credit, status);
        this.id = id;
        this.name = name;
        this.address = address;
        this.credit = credit;
        this.status = status;
        this.blogurl = blogurl;
    }
    toString() {
        return Object_formatter_1.default.format(this);
    }
    static create(csvString) {
        let internetCustomer;
        if (!csvString)
            throw new Error(ARGUMENT_EXCEPTION);
        let parsedCsvString = csvString.split(DELIMITER);
        internetCustomer = new InternetCustomer(parseInt(parsedCsvString[0]), parsedCsvString[1], parsedCsvString[2], parseInt(parsedCsvString[3]), parsedCsvString[4], parsedCsvString[5]);
        return internetCustomer;
    }
}
exports.default = InternetCustomer;
