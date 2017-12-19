Переводит строковую запись числа в цифровую
===========================================
Используемая кодировка:
-----------------------
UTF-8

API:
----
1. parseStringNumber(str)

Подключение:
------------
* В `node.js`:

```js
const parser = require("path/to/numstringparser.js");
console.log(parser("сто двадцать три")); 
```

* В `requireJS`:
```js
require(["numstringparser"], function(parser){
    alert(parser("сто двадцать три"));
});
```
* В `HTML`:
```html
<script src="numstringparser.js"></script>
...
<script>
    alert(parseStringNumber("сто двадцать три"));
</script>
```

Описание методов:
-----------------
### parseStringNumber(str)

#### Аргументы:
1. **str** - число в строковой записи (может быть от -999 999 999 999 999 до 999 999 999 999 999)

#### Вывод:
Число

#### Пример:
parseStringNumber("одна тысяча сто одиннадцать") --> 1111

#### Ошибки:
1. **Bad digits string** - неверно записаны какие-либо цифры в строке, переданной в качестве аргумента 
2. **Bad function argument** - неверный формат строки, переданной в качестве аргумента
3. **Need function argument** - не передан аргумент функции. str равен NaN или undefined