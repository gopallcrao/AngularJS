
import InternetCustomer from './models/internet-customer';
import CustomerService from './Services/Customer-service';
class MainClass {
    static run(): void {

        //console.log("Welcome to galaxy of NOde and TypeScript!");

        let cvsString: string = '1,NorthWind,Hyderabad,1200,true,http://www.yash.com/nw';
        let internetCustomer: InternetCustomer = InternetCustomer.create(cvsString);

        console.log(`Internet Customer Details : ${internetCustomer.toString()}`);

        let customerService = new CustomerService();

        for (let customer of customerService) {
            console.log(customer.toString());
        }

        let filteredCustomerPromise = customerService.getCustomers("Gopal");

        filteredCustomerPromise.then(
            result => console.log(`Filtered Customer ${JSON.stringify(result)}`),
            error => console.log('Error Occured,Details :' + error.toString()));

        console.log('End of Application');

    }
}
MainClass.run();