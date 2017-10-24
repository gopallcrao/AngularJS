"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DELIMITER = ', ';
const No_of_Trail_characters = 2;
const start_pos = 0;
class objectFormatter {
    static format(obj) {
        let formattedMessage = '';
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
exports.default = objectFormatter;
