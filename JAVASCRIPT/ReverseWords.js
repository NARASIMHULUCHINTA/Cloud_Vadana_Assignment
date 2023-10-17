function reverseWords(str) {
    if (str === "")
        return "";
    else
        return reverseWords(str.substr(1)) + str.charAt(0);
}
console.log(`Reversed string is : ${reverseWords('This is a Sunny day')}`)