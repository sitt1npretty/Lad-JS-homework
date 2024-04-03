// 1. Вывести в терминал строку “Hello World!”
console.log("Hello world")


// 2. Создать переменную для каждого типа данных
// 3. Вывести в консоль редактора кода созданные переменные
// 4. Вывести ее тип через оператор typeof и функцию typeof

// примитивные типы

// 1. number
    let itsNumber = 123;
    console.log (itsNumber);
    console.log (typeof itsNumber);

// 2. bigInt
    let itsBidInt = 12345678n;
    console.log (itsBidInt);
    console.log (typeof itsBidInt);

// 3. string
    let itsString = "Hello World!";
    console.log (itsString);
    console.log (typeof itsString);

// 4. boolean
    let itsBoolean = false;
    console.log (itsBoolean);
    console.log (typeof itsBoolean);

// 5. null
    let itsNull = null;
    console.log (itsNull);
    console.log (typeof itsNull); 

// 6. undefined
    let itsUndefined;
    console.log (itsUndefined);
    console.log (typeof itsUndefined);
// сложный тип
    // 7. object
    let itsObject = {
        name: "Nikita",
        age: 23,
        hockeyfan: true,
    };
    console.log (itsObject);
    console.log (typeof itsObject);

// typeof для функций
    function itsFunction() {};
    console.log (typeof itsFunction);


// 5. Попробовать изменить переменную объявленную через const
    const myBirthday = "08.02.2001";
    // myBirthday = "01.01.2001";
    // ошибка при изменении переменной, объявленнной через const

// 6. Попробовать изменить переменную с типом object объявленную через const

    const myFamily = {
        mother: {
            name: "Julia",
            age: 43
        },
        father: {
            name: "Alexei",
            age: 45
        },
        brother: false
    };
    // const myFamily = {
    //     name: "Nikita",
    //     age: 23
    // };
    myFamily.brother = true;
    console.log(myFamily);
    // ошибка при изменении переменной, объявленнной через const
    // изменение значения в паре "ключ: значение" к ошибке не приводит


// 7. Попробовать изменить переменную с типом object объявленную через let

    let me = {
        name: "Nikita",
        age: 23
    };
    me = null;
    console.log(me);
    // ошибки при изменении объекта нет 


// 8. Попробовать изменить переменную с типом object объявленную через var

    var myTeam = {
        name: "Vityazi",
        position: "centerforward",
        number: 71,
    };
    myTeam = undefined;
    console.log(myTeam);
    // ошибки при изменении объекта нет 