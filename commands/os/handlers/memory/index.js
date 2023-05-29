import { lineLog } from '../../../../helpers/index.js'; 
 
export default async () => {

    // If our application don't need "os" module
    const os = await import("os");

    lineLog(`Total Memory: ${os.totalmem()} bytes`);

};