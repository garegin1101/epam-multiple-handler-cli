import { log, username } from "../../helpers/index.js";

export default () => {

    log(`Thank you ${username}, goodbye!`);

    // Exits the application
    process.exit();

};