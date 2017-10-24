"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const internet_customer_1 = require("./models/internet-customer");
const Customer_service_1 = require("./Services/Customer-service");
class MainClass {
    static run() {
        //console.log("Welcome to galaxy of NOde and TypeScript!");
        let cvsString = '1,NorthWind,Hyderabad,1200,true,http://www.yash.com/nw';
        let internetCustomer = internet_customer_1.default.create(cvsString);
        console.log(`Internet Customer Details : ${internetCustomer.toString()}`);
        let customerService = new Customer_service_1.default();
        for (let customer of customerService) {
            console.log(customer.toString());
        }
        let filteredCustomerPromise = customerService.getCustomers("Gopal");
        filteredCustomerPromise.then(result => console.log(`Filtered Customer ${JSON.stringify(result)}`), error => console.log('Error Occured,Details :' + error.toString()));
        console.log('End of Application');
    }
}
MainClass.run();
