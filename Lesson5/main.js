// 1. Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.
let stringToarray = (str) => str = str.split(' ');
console.log("1:", stringToarray('Строка в массив слов'));

// 2. Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.
let deleteСharacters = (str, length) => str = str.slice(0, length);
console.log("2:", deleteСharacters('Массив слов', 2));

// 3. Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.
let insertDash = (str) => str = str.toUpperCase().replace(/ /g, '-');
console.log("3:", insertDash('Функция которая принимает строку в качестве аргумента и вставляет тире'));

// 4. Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.
let replaceFirstLetter = (str) => str = str[0].toUpperCase() + str.slice(1);
console.log("4:", replaceFirstLetter('lad js'));

// 5. Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.
let capitalize = (str) => str.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
console.log("5:", capitalize('lad js'));

// 6. Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».
let changeRegister = (str) => str.split('').map(el => el == el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()).join('');
console.log("6:", changeRegister('lAD jS'))

// 7. Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.
let removeChar = (str) => str.replace(/[^a-zA-Zа-яА-Я0-9]/g, "");
console.log("7:", removeChar('"l)ad js&'));

// 8. Напишите функцию zeros(num, len), которая дополняет нулями до указанной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента.
function zeros(num, len, sign) {
    let numtext = num + "";
    for (let i = numtext.length; i < len; i++) {
        numtext = numtext + "0";
    }

    return Number(sign + numtext);
}
console.log("8:", zeros(71, 4, "-"));

// 9. Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
let comparison = (str1, str2) => str1.toLowerCase() === str2.toLowerCase() ? "Строки равны" : "Строки не равны";
console.log("9:", comparison('Lad JS', 'Lad academy JS'));

// 10. Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.
let insensitiveSearch = (str1, str2) => str1.toUpperCase().includes(str2.toUpperCase()); 
console.log("10:", insensitiveSearch("LadJS", "js"));

// 11. Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в camelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.
let initCap = (str) => str = str.split(' ').map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()).join('');
console.log("11:", initCap('lad js'));

// 12. Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из camelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.
function initSnake(str) {
    let result = str.replace(/([A-Z])/g, ' $1')
    return result.split(' ').join('_').toLowerCase()
  }
  
  console.log("12:", initSnake('ladJs'))
// 13. Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.
function repeatStr(str, n) {
    for (let i = 0; i < n; i++) {
        console.log("13:", str);
    } 
    return str;
};
repeatStr('ladJs', 2);

// 14. Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.
const path = (pathname) => {
   return pathname.split("/").at(-1);
};
console.log("14:", path("https://github.com/sitt1npretty"));

// 15. Создайте функцию endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.
let endsWith = (str, str1) => str.toLowerCase().endsWith(str1.toLowerCase());
console.log("15:", endsWith('Lad JS', 'js'));

// 16. Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.
function getSubstr(str, char, pos) {
    let position = str.indexOf(char);
    if (pos === 'before') return str = str.slice(0, position).trim();
    else if ( pos === 'after') return str = str.slice(position + char.length).trim();
}
console.log("16:", getSubstr('Lad JS', 'JS', 'before'));

// 17. Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.
let insert = (str, substr, pos = 0) => str = str.slice(0, pos) + substr + str.slice(pos);
console.log("17:", insert(' is a hockey fan', 'Nikita'));

// 18. Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.
let limitStr = (str, n, symb = '...') => str = str.slice(0, n) + symb;
console.log("18:", limitStr('Lad JS', '5', '!'));

// 19. Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.
function count(str, stringsearch) {
    regexp = new RegExp(`${stringsearch}`, "ig");
    return str.match(regexp).length;
}
console.log("19:", count('Nikita', 'i'));

// 20. Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.
let strip = (str) => str.split(' ').filter(item => item !== '').join(' ');
console.log("20:", strip('LAD   JS     courses'));

// 21. Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.
let cutString = (str, n) => str.split(' ', n).join(' ');
console.log("21:", cutString('LAD JS courses', 1));

// 22. Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.
function findWord(word, str) {
    regexp = new RegExp(`${word}`, "ig");
    return str.match(regexp) ? "существует" : "не существует"; 
}
console.log("22:", findWord('js','LAD JS courses'));