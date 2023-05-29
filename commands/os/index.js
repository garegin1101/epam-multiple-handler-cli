import hendlerList from "./handlers/index.js";
import { invalid } from "../../helpers/index.js";

export default (args) => {

    //Check if there is at least 1 handler
    if(!args.length) return invalid(1);

    //Check if all handlers are valid
    for(let arg of args) if(!(arg in hendlerList)) return invalid(arg);

    //check if all handlers are unique
    let set = new Set(args);
    if(set.size !== args.length) return invalid(2);

    //If everything is OK, executes handlers
    for(let arg of args)  hendlerList[arg]();

};