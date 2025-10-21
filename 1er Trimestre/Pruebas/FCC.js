function convertToRoman(num) {
    let romano = "";
    do {
        if (num >= 1000) {
            romano += "M";
            num = num % 1000;
        } else if (num >= 900) {
            romano += "CM";
            num = num % 900;
        } else if (num >= 500) {
            romano += "D";
            num = num % 500;
        } else if (num >= 400) {
            romano += "CD";
            num = num % 400;
        } else if (num >= 100) {
            romano += "C";
            num = num % 100;
        } else if (num >= 90) {
            romano += "XC";
            num = num % 90;
        } else if (num >= 50) {
            romano += "L";
            num = num % 50;
        } else if (num >= 40) {
            romano += "XL";
            num = num % 40;
        } else if (num >= 10) {
            romano += "X";
            num = num%10;
            console.log(num)
        } else if (num >= 9) {
            romano += "IX";
            num = num % 9;
        } else if (num >= 5) {
            romano += "V";
            num = num % 5;
        } else if (num >= 4) {
            romano += "IV";
            num = num % 4;
        } else if (num >= 1) {
            romano += "I";
            num = num - 1;
        }
    }while (num>0);
    return romano;
}
console.log(convertToRoman(29));
