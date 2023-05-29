const log = (text) => process.stdout.write(text + "\n");

const lineLog = (text) => {

    log("\n---------------------------------\n");

    if(text){

        log(text);
        log("\n---------------------------------\n");

    }
    
}

export { log, lineLog }