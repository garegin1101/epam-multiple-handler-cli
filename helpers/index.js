import  { log , lineLog}  from "./logs/index.js";
import invalid from "./invalid/index.js";
import handleInput from "./handleInput/index.js";

// Get the current username
// There is alternative approach os.userInfo().username
const username = process.env.USER || process.env.USERNAME;

export {
    log,
    lineLog,
    username,
    handleInput,
    invalid
}