import printCPUsInfo from "./cpus/index.js";
import printTotalMemory from "./memory/index.js";
import printHomeDirectory from "./home-dir/index.js";
import printHostName from "./hostname/index.js";
import printPlatform from "./platform/index.js";
import printCPUArchitecture from "./architecture/index.js";
import printUsername from "./username/index.js";

export default {
    '--cpus'        : printCPUsInfo,
    '--homedir'     : printHomeDirectory,
    '--username'    : printUsername,
    '--architecture': printCPUArchitecture,
    '--hostname'    : printHostName,
    '--platform'    : printPlatform,
    '--memory'      : printTotalMemory
};
