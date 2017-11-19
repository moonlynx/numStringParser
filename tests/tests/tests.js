describe ("numToText tests", function() {    
    it ("Error if argument is not valid text number", function() {
        assert.throw(function() {parseStringNumber("test")}, Error);
    });

    it ("Error if argument is undefined", function() {
        assert.throw(function() {parseStringNumber()}, Error);
    });

    it ("Error if argument is NaN", function() {
        assert.throw(function() {parseStringNumber(NaN)}, Error);
    });

    it ("Return 0 if argument is 'ноль'", function() {
        assert.equal(0, parseStringNumber('ноль'));
    });

    it ("Return 1 if argument is 'один'", function() {
        assert.equal(1, parseStringNumber('один'));
    });

    it ("Return 10 if argument is 'десять'", function() {
        assert.equal(10, parseStringNumber('десять'));
    });

    it ("Return 12 if argument is 'двенадцать'", function() {
        assert.equal(10, parseStringNumber('десять'));
    });

    it ("Return 123 if argument is 'сто двадцать три'", function() {
        assert.equal(123, parseStringNumber('сто двадцать три'));
    });

    it ("Return -1000 if argument is 'минус одна тысяча'", function() {
        assert.equal(-1000, parseStringNumber('минус одна тысяча'));
    });

    it ("Return -1000000 if argument is 'минус один миллион'", function() {
        assert.equal(-1000000, parseStringNumber('минус один миллион'));
    });

    it ("Return -1000000000 if argument is 'минус один миллиард'", function() {
        assert.equal(-1000000000, parseStringNumber('минус один миллиард'));
    });

    it ("Return -1000000000000 if argument is 'минус один триллион'", function() {
        assert.equal(-1000000000000, parseStringNumber('минус один триллион'));
    });

    it ("Return 1000015 if argument is 'один миллион пятнадцать'", function() {
        assert.equal(1000015, parseStringNumber('один миллион пятнадцать'));
    });

    it ("Return 100500 if argument is 'сто тысяч пятьсот'", function() {
        assert.equal(100500, parseStringNumber('сто тысяч пятьсот'));
    });

    it ("Return 1050 if argument is 'одна тысяча пятьдесят'", function() {
        assert.equal(1050, parseStringNumber('одна тысяча пятьдесят'));
    });
});