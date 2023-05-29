import { log } from '../logs/index.js';

export default (arg) => {

    if(arg instanceof Array) log(`Invalid command: Type "os" or ".exit"`) 
    else if(arg === 1) log("Invalid input: Please add hendler, for example --cpus")
    else if(arg === 2) log("Invalid input: Please don't repeat handlers")
    else log(`Invalid handler: "${arg}" is not a handler`);

};