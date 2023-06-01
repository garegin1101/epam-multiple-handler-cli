import { invalid, log } from '../../helpers/index.js';

export default async (args) => {

    if(args.length !== 1) return invalid(3);

    let fs = await import('fs/promises');

    const [ path_to_file ] = args;

    try {

        await fs.unlink(path_to_file);

        log('Success');

    } catch(err) {

        log(err.message);
        
    }

}