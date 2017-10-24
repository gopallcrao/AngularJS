"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("../models/customer");
const random_generator_1 = require("../utilities/random-generator");
const DEFAULT_ADDRESS = 'Hyderabad';
const DEFAULT_TIMEOUT = 4000;
const MIN_INDEXOF_POS = 0;
class CustomerService {
    constructor() {
        this.customers = [];
        let names = ['Gopal', 'Nandkishore', 'Priyanka', 'Srikanth', 'Kishore', 'Ramesh Babu'];
        names.forEach((name, index) => {
            let credit = random_generator_1.default.generateRandom();
            let customer = new customer_1.default(index, name, DEFAULT_ADDRESS, credit, index % 2 == 0);
            this.customers.push(customer);
        });
    }
    *[Symbol.iterator]() {
        for (let customer of this.customers) {
            yield customer;
        }
    }
    getCustomers(name = '') {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let filteredCustomers = [];
                if (!name) {
                    filteredCustomers = this.customers;
                }
                else {
                    filteredCustomers = this.customers.filter(customer => customer.name.indexOf(name) >= MIN_INDEXOF_POS);
                }
                resolve(filteredCustomers);
            }, DEFAULT_TIMEOUT);
        });
        return promise;
    }
}
exports.default = CustomerService;
