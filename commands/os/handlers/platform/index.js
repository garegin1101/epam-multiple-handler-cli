import { lineLog } from '../../../../helpers/index.js';

export default () => {

    // There is alternative approach os.platform()
    lineLog(`Platform: ${process.platform}`);
    
};