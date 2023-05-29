import commandList from '../commands/index.js';
import { handleInput, invalid } from "../helpers/index.js";

export default () => {

    //listen for "input" event
    process.stdin.on('data', (input) => {

        // Handle user input
        const [command, ...hendlers] = handleInput(input);

        // Check the user's command
        (commandList[command] || invalid)(hendlers);

    });

    // Listen for the Ctrl+C event
    process.on('SIGINT', () => commandList[".exit"]());

};