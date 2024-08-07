// concat-Concatenates two or more strings
let str1 = "Hello";
let str2 = "World";
let concatenatedString = str1.concat(" ", str2);
console.log('concat:', concatenatedString);

// includes-Determines whether one string may be found within another string
let includesSubstring = str1.includes("ell");
console.log('includes:', includesSubstring);

// indexOf-Returns the index within the calling String object of the first occurrence of the specified value
let indexOfSubstring = str1.indexOf("l");
console.log('indexOf:', indexOfSubstring);

// lastIndexOf-Returns the index within the calling String object of the last occurrence of the specified value
let lastIndexOfSubstring = str1.lastIndexOf("l");
console.log('lastIndexOf:', lastIndexOfSubstring); 

// padEnd-Pads the current string with a given string (repeated, if needed) so that the resulting string reaches the given length
let paddedEndString = str1.padEnd(10, ".");
console.log('padEnd:', paddedEndString);

// padStart=Pads the current string with a given string (repeated, if needed) so that the resulting string reaches the given length
let paddedStartString = str1.padStart(10, ".");
console.log('padStart:', paddedStartString);

// repeat-Constructs and returns a new string which contains the specified number of copies of the string
let repeatedString = str1.repeat(3);
console.log('repeat:', repeatedString); 

// replace-Returns a new string with some or all matches of a pattern replaced by a replacement
let replacedString = str1.replace("l", "L");
console.log('replace:', replacedString);

// search-Executes a search for a match between a regular expression and this String object
let searchIndex = str1.search("l");
console.log('search:', searchIndex); 

// slice-Extracts a section of a string and returns it as a new string
let slicedString = str1.slice(1, 4);
console.log('slice:', slicedString); 

// split-splits a String object into an array of strings by separating the string into substrings
let splitString = str1.split("e");
console.log('split:', splitString);

// startsWith-Determines whether a string begins with the characters of a specified string
let startsWithString = str1.startsWith("He");
console.log('startsWith:', startsWithString);

// substr-Returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards
let substrString = str1.substr(1, 3);
console.log('substr:', substrString); 

// substring-Returns the part of the string between the start and end indexes, or to the end of the string
let substringString = str1.substring(1, 4);
console.log('substring:', substringString); 

// toLowerCase-Returns the calling string value converted to lower case
let lowerCaseString = str1.toLowerCase();
console.log('toLowerCase:', lowerCaseString);

// toUpperCase-Returns the calling string value converted to upper case
let upperCaseString = str1.toUpperCase();
console.log('toUpperCase:', upperCaseString); 

// trim-Trims whitespace from both ends of the string
let whitespaceString = "  Hello World  ";
let trimmedString = whitespaceString.trim();
console.log('trim:', trimmedString); 

// trimEnd(trimRight)-Trims whitespace from the end of the string
let trimmedEndString = whitespaceString.trimEnd();
console.log('trimEnd:', trimmedEndString);

// trimStart(trimLeft)-Trims whitespace from the start of the string
let trimmedStartString = whitespaceString.trimStart();
console.log('trimStart:', trimmedStartString); 

// charAt-Returns the character at the specified index
let charAtString = str1.charAt(1);
console.log('charAt:', charAtString);

// charCodeAt-Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index
let charCodeAtString = str1.charCodeAt(1);
console.log('charCodeAt:', charCodeAtString);
