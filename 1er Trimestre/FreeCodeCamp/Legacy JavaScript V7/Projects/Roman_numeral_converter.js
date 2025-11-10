function convertToRoman(num) {
    let romanNum = ""

    do {

        switch (num) {
            case num >= 1000:
                romanNum += 'M';
                num -= 1000
                break;
            case num >= 900:
                romanNum += 'CM';
                num -= 900
                break;
            case num >= 500:
                romanNum += 'D';
                num -= 500
                break;
            case num >= 400:
                romanNum += 'CD';
                num -= 400
                break;
            case num >= 100:
                romanNum += 'C';
                num -= 100
                break;
            case num >= 90:
                romanNum += 'XC';
                num -= 90
                break;
            case num >= 50:
                romanNum += 'L';
                num -= 50
                break;
            case num >= 40:
                romanNum += 'XL';
                num -= 40
                break;
            case num >= 10:
                romanNum += 'X';
                num -= 10
                break;
            case num >= 9:
                romanNum += 'IX';
                num -= 9
                break;
            case num >= 5:
                romanNum += 'V';
                num -= 5
                break;
            case num >= 4:
                romanNum += 'IV';
                num -= 4
                break;
            case num >= 1:
                romanNum = romanNum + 'I';
                num -= 1
                break;
        }
        console.log(romanNum, "a");

    }while (num >= 0)
    return romanNum;
}

console.log(convertToRoman(36));