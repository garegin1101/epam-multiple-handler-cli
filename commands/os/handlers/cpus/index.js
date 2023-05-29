import { lineLog, log } from "../../../../helpers/index.js";

export default async () => {

    // If our application don't need "os" module
    const os = await import('os');

    const cpus = os.cpus();

    lineLog();

    log(`Overall CPUs: ${cpus.length} \n`);
  
    cpus.forEach((cpu, index) => {

      log(`CPU ${index + 1}: Model - ${cpu.model}, Clock Rate - ${cpu.speed / 1000} GHz`);
      
    });

    lineLog();

};