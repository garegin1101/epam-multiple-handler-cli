import { invalid, log } from '../../helpers/index.js';

export default async (args) => {

    // If there is arguments, input is invalid
    if(args.length) return invalid();

    const fs = await import('fs/promises');

    try {

        const files = (await fs.readdir('.', { withFileTypes: true }))
        // Type of directory content should be marked explicitly (e.g. as a corresponding column value)
        .map((file) => {
            return {
                Name: file.name,
                Type: file.isDirectory() ? 'directory' : 'file',
            }
        })
        // Folders and files are sorted in alphabetical order ascending, but list of folders goes first
        .sort((a,b) => {
            if(a.Type === b.Type) return a.Name.toLowerCase() > b.Name.toLowerCase() ? 1 : -1;    
            else return a.Type === "file" ? 1 : -1; 
        });
  
        // Show output like table
        console.table(files);

    } catch (err) {

        log(err.message);

    }
}