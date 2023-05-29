import { lineLog } from '../../../../helpers/index.js';

export default () => {
    
    //There is alternative approach os.arch()
    lineLog(`CPU Architecture: ${process.arch}`);

};