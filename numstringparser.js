function parseDigits(textDigitsArr) {
    var BAD_DIGITS_STRING_ERROR = new Error('Bad digits string'),
        BAD_ARGUMENT_ERROR = new Error('Bad function argument'),
        NEED_ARGUMENT_ERROR = new Error('Need function argument');

    var firstTens = ['один',  'два',  'три',    'четыре', 'пять',
                     'шесть', 'семь', 'восемь', 'девять', 'десять',
                     'одиннадцать',  'двенадцать',   'тринадцать',
                     'четырнадцать', 'пятнадцать',   'шестнадцать',
                     'семнадцать',   'восемнадцать', 'девятнадцать'],
        tens =	['двадцать', 'тридцать', 'сорок', 'пятьдесят',
                 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
        hungreds = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот',
                    'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    var firstTensKey = true,
        tensKey = true,
        hungredsKey = true,
        
        result = 0,
        digit;
    
    if (typeof(textDigitsArr) == 'undefined' || textDigitsArr === null) { throw NEED_ARGUMENT_ERROR; }
    if (typeof(textDigitsArr) != 'object' || !(textDigitsArr instanceof Array)) { throw BAD_ARGUMENT_ERROR; }
    if (textDigitsArr.length > 3) { throw BAD_DIGITS_STRING_ERROR; }
    if ((textDigitsArr.length == 1) && (textDigitsArr[0] == '')) { textDigitsArr = ['один']; }

    while (textDigitsArr.length > 0) {
        digit = textDigitsArr.shift();

        if ((hungreds.indexOf(digit) != -1) && (hungredsKey)) {
            result += (hungreds.indexOf(digit) + 1) * 100;
            hungredsKey = false;

        } else if ((tens.indexOf(digit) != -1) && (tensKey)) {
            result += (tens.indexOf(digit) + 2) * 10;
            tensKey = false;

        } else if ((firstTens.indexOf(digit) != -1) && (firstTensKey)) {
            result += (firstTens.indexOf(digit) + 1);
            firstTensKey = false;

        } else {
            throw BAD_DIGITS_STRING_ERROR;
        }
    }

    return result;
}

function checkThousandEnd(str) {
    var strLen = str.length;

    if (str.substring(strLen - 4) == 'одна') {
        str = str.substring(0, strLen - 4) + 'один';
    }

    if (str.substring(strLen - 3) == "две") {
        str = str.substring(0, strLen - 3) + 'два';
    }

    return str;
}

function parseStringNumber(str) {
    var numClassWords = ['триллион', 'миллиард', 'миллион', 'тысяч'];
    
    var number = str.toLowerCase(),
        separator = ' ',
        minusDesc = 'минус',
        minusLen = minusDesc.length,
        minusPosition = number.indexOf(minusDesc),
        isNegative = false,
        result = 0;
        
    if (minusPosition != -1) {
        number = str.substring(minusLen + 1);
        isNegative = true;
    }

    if ((number == 'нуль') || (number == 'ноль')) { return 0; }

    numClassWords.forEach(function(item, position){
        var itemPosition = number.indexOf(item),
            numClassWordsSize = numClassWords.length,
            classOfItemNumber,
            exponent,
            firstSepPosition,
            digits;

        if (itemPosition != -1) {
            exponent = numClassWordsSize - position;
            classOfItemNumber = Math.pow(1000, exponent);

            digits = number.substring(0, itemPosition - 1);

            if (position == numClassWordsSize - 1) {
                digits = checkThousandEnd(digits);
            }

            result += parseDigits(digits.split(separator)) * classOfItemNumber;

            firstSepPosition = number.indexOf(separator, itemPosition);
            
            if (firstSepPosition != -1) {
                number = number.substring(firstSepPosition + 1);
            } else {
                number = '';
            }            
        }
    });

    if (number.length > 0) {
        result += parseDigits(number.split(separator));
    }
    
    if (isNegative) { result = -result; }

    return result;
}