function palindrome(str) {
    let regex = /\W|_|\.|,/g;
    str = str.toLowerCase();
    str = str.replace(regex,"");
    console.log(str);
    return str===str.split("").reverse().join("");
}

console.log(palindrome("A man, a plan, a canal. Panama"));