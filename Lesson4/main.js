// 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
    // Function Declaration
    function numSquare(a,b) {
        let result = a**b; 
        return result; 
    }
    console.log(numSquare(4,2));

    // Function Expression
    let numSquare2=function(a,b) {
        let result = a**b;
        return result;
    }
    console.log(numSquare(4,3));

    // Cтрелочная функция
    let numSquare3 = (a, b) => a**b; 
    console.log(numSquare(3,4))


// 2. Сделайте функцию, которая возвращает сумму двух чисел.
    // Function Declaration
    function numSum(a,b) {
        let result = a+b; 
        return result; 
    }
    console.log(numSum(4,2));

    // Function Expression
    let numSum2=function(a,b) {
        let result = a+b;
        return result;
    }
    console.log(numSum2(100, 200));

    // Cтрелочная функция
    let numSum3 = (a, b) => a+b; 
    console.log(numSum3(10,20)); 


// 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
    // Function Declaration
    function numSumDivision(a,b,c) {
        let result = (a-b)/c; 
        return result; 
    }
    console.log(numSumDivision(4,2,2));

    // Function Expression
    let numSumDivision2=function(a,b,c) {
        let result = (a-b)/c;
        return result;
    }
    console.log(numSumDivision2(200,100,2));

    // Cтрелочная функция
    let numSumDivision3 = (a,b,c) => (a-b)/c; 
    console.log(numSumDivision3(9,3,2));


// 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
    // Function Declaration
    function getDay(a) {
        if (a >= 1 && a <= 7) {
            let day;
            if (a === 1) day = "Понедельник";
            if (a === 2) day = "Вторник";
            if (a === 3) day = "Среда";
            if (a === 4) day = "Четверг";
            if (a === 5) day = "Пятница";
            if (a === 6) day = "Суббота";
            if (a === 7) day = "Воскресенье";
            return day;
        } else {
            return "Ошибка! Введите число от 1 до 7!";
        };
    }
    console.log(getDay(2));

    // Function Expression
    let getDay2 = function(a) {
        if (a >= 1 && a <= 7) {
            let day;
            if (a === 1) day = "Понедельник";
            if (a === 2) day = "Вторник";
            if (a === 3) day = "Среда";
            if (a === 4) day = "Четверг";
            if (a === 5) day = "Пятница";
            if (a === 6) day = "Суббота";
            if (a === 7) day = "Воскресенье";
            return day;
        } else {
            return "Ошибка! Введите число от 1 до 7!";
        };
    }
    console.log(getDay2(3));

    // Cтрелочная функция
    let getDay3 = (a) => {
        if (a >= 1 && a <= 7) {
            let day;
            if (a === 1) day = "Понедельник";
            if (a === 2) day = "Вторник";
            if (a === 3) day = "Среда";
            if (a === 4) day = "Четверг";
            if (a === 5) day = "Пятница";
            if (a === 6) day = "Суббота";
            if (a === 7) day = "Воскресенье";
            return day;
        } else {
            return "Ошибка! Введите число от 1 до 7!";
        };
    };
    console.log(getDay3(8));


// 5. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
    // Function Declaration
    function isEqual(a, b) {
        return a === b;
    }
    console.log(isEqual(2, 2));

    // Function Expression
    let isEqual2 = function(a, b) {
        return a === b;
    }
    console.log(isEqual2(1, 2));

    // Cтрелочная функция
    let  isEqual3 = (a, b) => a === b;
    console.log(isEqual3(3, 3));

// 6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.
    // Function Declaration
    function isLargerTen(a,b) {
        return (a+b)>10;
    }
    console.log(isLargerTen(10,0));

    // Function Expression
    let isLargerTen2 = function(a,b) {
        return (a+b)>10;
    }
    console.log(isLargerTen2(10,1));

    // Cтрелочная функция
    let isLargerTen3 = (a,b) => (a+b)>10;
    console.log(isLargerTen3(10,1));


// 7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
    function isLargerZero(a) {
        return a<0;
    }
    console.log(isLargerZero(1));

    // Function Expression
    let isLargerZero2 = function(a) {
        return a<0;
    }
    console.log(isLargerZero2(-2));

    // Cтрелочная функция
    let isLargerZero3 = (a) => a<0;
    console.log(isLargerZero3(10));

// 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
    function isNumberInRange(a) {
        return a>0 && a<10;
    }
    console.log(isNumberInRange(1));

    // Function Expression
    let isNumberInRange2 = function(a) {
        return a>0 && a<10;
    }
    console.log(isNumberInRange2(-2));

    // Cтрелочная функция
    let isNumberInRange3 = (a) => a>0 && a<10;
    console.log(isNumberInRange3(10));


// 9. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
    // Function Declaration
    function isEven(a) {
        return !(a % 2);
    }
    console.log(isEven(11));

    // Function Expression
    let isEven2 = function(a) {
        return !(a % 2);
    }
    console.log(isEven2(10));

    // Cтрелочная функция
    let isEven3 = (a) => !(a % 2);
    console.log(isEven3(11));