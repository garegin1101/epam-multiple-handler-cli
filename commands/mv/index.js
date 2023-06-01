import { invalid, log } from '../../helpers/index.js';

export default async (args) => {

    if(args.length !== 2) return invalid(3);

    const fs = await import('fs/promises');
    const path = await import('path');

    const [ path_to_file, path_to_new_directory ] = args;

    const basename = path.basename(path_to_file);
    const destination = path.join(path_to_new_directory, basename);

    try {
    
        await fs.rename(path_to_file, destination);

        log("Success");

    } catch (err) {

        log(err.message);

    }

}