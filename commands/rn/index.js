import { invalid, log } from '../../helpers/index.js';

export default async (args) => {

    if(args.length !== 2) return invalid(3);

    const path = await import('path');

    const [ path_to_file, new_filename ] = args;

    const dirname1 = path.dirname(path_to_file);
    const dirname2 = path.dirname(new_filename);

    // If dirnames aren't equal, it means that we move files instead of rename
    if(dirname1 !== dirname2) return invalid(4)

    const fs = await import('fs/promises');

    try {

        await fs.rename(path_to_file, new_filename);

        log("Success");

    } catch(err) {

        log(err.message);

    }
    
}