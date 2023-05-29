import { lineLog } from '../../../../helpers/index.js';

export default () => {

    // There is alternative approach os.homedir()
    lineLog(`Home Directory: ${process.env.HOME || process.env.USERPROFILE}`);
    
};