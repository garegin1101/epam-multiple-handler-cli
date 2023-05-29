import { lineLog } from '../../../../helpers/index.js';

export default () => {

    // There is alternative approach os.hostname()
    lineLog(`Hostname: ${process.env.HOSTNAME}`);
    
};