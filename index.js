//Зданаие 1//
var x = 20;
var y = 58;
var z = 42;

console.log(x+y+z);

//Задание 2//
 var sec = 60;
 var min = 60;
 var hours = 24;
 var days = 365;
var myAgeInSeconds = prompt('Введите ваш возраст');

alert(myAgeInSeconds*days*hours*min*sec +'- ваш возраст в секундах');

//Задание 3//

var count = 42;
var userName = '42';


var string = String(count);


var number = +(userName);

console.log(countAsString); 
console.log(userNameAsNumber); 

//Задание 4//

var a = 1;
var b = 2;
var c = ' белых медведей';

var stringFirst = String(a);
var stringSecond = String(b);
 console.log (stringFirst + stringSecond + c);

//Задание 5//

var variable1 = 42; 
var variable2 = 'Строка'; 
var variable3 = true; 

console.log('Variable: variable1 have type: ' + typeof variable1);
console.log('Variable: variable2 have type: ' + typeof variable2);
console.log('Variable: variable3 have type: ' + typeof variable3);

//Задание 6

var name = prompt('Как вас зовут');
var age = prompt('Сколько вам лет');

console.log('Ваш возраст: '+ age)
console.log('Ваше имя: '+ name);

//Задание 7

var a = 4;
var b = 3;

a = a + b;
b = a - b;
a = a - b;

console.log('Теперь a = ' + a); 
console.log('Теперь b = ' + b); 


//Задание 8

var string ='true';
var boolean = false;
var number = 17;
var Undefined = undefined;
var Null = null;


console.log(typeof string);
console.log(typeof boolean);
console.log(typeof number);
console.log(typeof Undefined);
console.log(typeof Null);

//Задание 9

var height = 15;
var width = 20;

if(height > width){
    console.log(height);
} else {
    console.log(width);
}

//Задание 10

for (var i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//Задание 11


var key = true;
var documents = true;
var pen = true;
var apple = false;
var orange = true;

var shouldGoToWork = (key && documents && pen) && (apple || orange);

console.log(shouldGoToWork); 

//Задание 12


var userNumber = prompt('Введите число:');



if (userNumber % 3 === 0 && userNumber % 5 === 0) {
    console.log('FizBuz');
} else if (userNumber % 3 === 0) {
    console.log('Buz');
} else if (userNumber % 5 === 0) {
    console.log('Fiz');
} else {
    console.log('Число не делится на 3 и 5 без остатка.');
}


//Задание 13

var userAge = prompt('Введите ваш возраст');

if (userAge > 18) {
    console.log('Попей пивка')
}
else if (userAge <= 18 && userAge >= 16) {
    console.log('Можешь выкурить сигаретку, только маме не говори')
} else if (userAge < 18) {
    console.log('Пей колу');
} else {
    console.log('Что-то пошло не так')
}

//Задание 14

var direction = prompt('В какую сторону света вы хотели бы отправиться? (север, юг, запад, восток)');

switch (direction) {
    case 'юг':
        console.log('На юг пойдешь, счастье найдешь');
        break;
    case 'север':
        console.log('На север пойдешь, много денег найдешь');
        break;
    case 'запад':
        console.log('На запад пойдешь, верного друга найдешь');
        break;
    case 'восток':
        console.log('На восток пойдешь, разработчиком станешь');
        break;
    default:
        console.log('Такой стороны света не существует');
}













