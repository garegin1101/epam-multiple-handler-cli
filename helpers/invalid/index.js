import { log } from '../logs/index.js';

export default (arg) => {

    if(arg instanceof Array) log(`Invalid command`) 
    else if(arg === 1) log("Invalid input: Please add hendler, for example --cpus")
    else if(arg === 2) log("Invalid input: Please don't repeat handlers")
    else if(arg === 3) log("Invalid input")
    else if(arg === 4) log("Invalid input: If dirnames aren't equal, it means that we move files instead of rename")
    else if(arg === 4) log("Invalid input: You cannot create file in other directories")
    else log(`Invalid handler: "${arg}" is not a handler`);

};