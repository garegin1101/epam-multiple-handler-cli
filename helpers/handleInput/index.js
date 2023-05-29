export default (input) => {
    return input
    // Converts Buffer to utf-8
    .toString()
    // Remove spaces (not between words)
    .trim()
    // Make array from string         
    .split(' ')
    // If user type between words more than one space it's not a problem            
    .filter(val=>val);
};