import Customer from '../models/customer';
import RandomGenerator from '../utilities/random-generator';

const DEFAULT_ADDRESS: string = 'Hyderabad';
const DEFAULT_TIMEOUT: number = 4000;
const MIN_INDEXOF_POS: number = 0;

class CustomerService {
    private customers: Customer[] = [];

    constructor() {
        let names: string[] =
            ['Gopal', 'Nandkishore', 'Priyanka', 'Srikanth', 'Kishore', 'Ramesh Babu'];

        names.forEach(
            (name: string, index: number) => {
                let credit = RandomGenerator.generateRandom();
                let customer = new Customer(
                    index, name,
                    DEFAULT_ADDRESS, credit, index % 2 == 0);

                this.customers.push(customer);
            });
    }

    *[Symbol.iterator]() {
        for (let customer of this.customers) {
            yield customer;
        }
    }

    getCustomers(name: string = ''): Promise<Customer[]> {
        let promise: Promise<Customer[]> =
            new Promise<Customer[]>(
                (resolve, reject) => {
                    setTimeout(() => {
                        let filteredCustomers: Customer[] = [];

                        if (!name) {
                            filteredCustomers = this.customers;
                        } else {
                            filteredCustomers = this.customers.filter(
                                customer => customer.name.indexOf(name) >= MIN_INDEXOF_POS);
                        }

                        resolve(filteredCustomers);
                    }, DEFAULT_TIMEOUT);
                });

        return promise;
    }
}

export default CustomerService;
