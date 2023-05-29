import { username, log } from "./helpers/index.js";
import listen from "./listener/index.js";

// Display welcome message
log(`Welcome ${username}!`);

// Listen for "exit" and "input" events
listen();