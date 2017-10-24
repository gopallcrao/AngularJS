const DELIMITER: String = ', ';
const No_of_Trail_characters: number = 2;
const start_pos: number = 0;
class objectFormatter {

    static format(obj: any): string {
        let formattedMessage: string = '';
        if (obj) {
            for (let property in obj) {
                let propertyValue = obj[property];

                if (propertyValue && typeof propertyValue !== 'function') {

                    formattedMessage += `${propertyValue}${DELIMITER}`;
                }
            }

            formattedMessage = formattedMessage.substr(start_pos, formattedMessage.length - No_of_Trail_characters);
        }
        return formattedMessage;
    }
}

export default objectFormatter;

