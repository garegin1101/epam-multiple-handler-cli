import { invalid, log } from '../../helpers/index.js';

export default async (args) => {

    if (args.length !== 1) return invalid(3);

    const path = await import('path');

    const [ new_file_name ] = args;

    const basename = path.basename(new_file_name);
    // Create empty file with passed name in current working directory
    // You cannot create file in other directories
    if (basename !== new_file_name) return invalid(5);

    const fs = await import('fs/promises');

    try {
        // If file exist it will throw error
        const filehandle = await fs.open(new_file_name, "wx");

        await filehandle.close();

        log("Success")

    } catch (err) {

        log(err.message);

    }

}