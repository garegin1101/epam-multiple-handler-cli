export default (arg) => {
    if(arg instanceof Array) console.log(`Invalid command: Type "os" or ".exit"`) 
    else if(arg === 1) console.log("Invalid input: Please add hendler, for example --cpus")
    else if(arg === 2) console.log("Invalid input: Please don't repeat handlers")
    else console.log(`Invalid handler: "${arg}" is not a handler`);
};