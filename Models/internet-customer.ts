import customer from './customer';
import objectFormater from '../Utilities/Object-formatter';

const DELIMITER: string =',';
const ARGUMENT_EXCEPTION: string = 'hi i am failed';

class InternetCustomer extends customer {
    constructor(public id:number, public name:string, public address:string, public credit:number, public status:boolean, public blogurl:string)
    {
        super(id,name,address,credit,status);
    }

    toString(): string {

return objectFormater.format(this);

    }

    static create(csvString : string ): InternetCustomer{

        let internetCustomer: InternetCustomer;

        if(!csvString)
        throw new Error(ARGUMENT_EXCEPTION);

        let parsedCsvString =csvString.split(DELIMITER);

        internetCustomer =new InternetCustomer(parseInt(parsedCsvString[0]),
    parsedCsvString[1],parsedCsvString[2],parseInt(parsedCsvString[3]),
    <any>parsedCsvString[4], parsedCsvString[5]);
    

    return internetCustomer;

    }
}

export default InternetCustomer;


