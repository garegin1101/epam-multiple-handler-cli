import { lineLog, username } from '../../../../helpers/index.js';

export default () => {

    // There is alternative approach os.userInfo().username
    lineLog(`Username: ${username}`);

};