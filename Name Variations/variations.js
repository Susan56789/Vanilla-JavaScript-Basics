
/** @param {string} name */
export function getNumberOfChars(name) {
    // number of characters in: name
    return name.length;
}

/** @param {string} name */
export function getFirstChar(name) {
    // first character of: name
    return name.charAt(0);
}

/** @param {string} name */
export function getLastChar(name) {
    // last character of: name
    return name[name.length-1];
}

/** @param {string} name */
export function getLower(name) {
    // name all in lower case (example: "ABC" becomes "abc")
    return name.toLocaleLowerCase();
}

/** @param {string} name */
export function getUpper(name) {
    // name all in upper case (example: "abc" becomes "ABC")
    return name.toLocaleUpperCase();
}
/** @param {string} name */
export function getCapitalized(name) {
    // capitalized version of name (example: "alEX" becomes "Alex")
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
}

