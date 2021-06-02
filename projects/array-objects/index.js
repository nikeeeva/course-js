/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(el))
 */
function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
 */
function map(array, fn) {
  const temp = [];
  for (let i = 0; i < array.length; i++) {
    temp[i] = fn(array[i], i, array);
  }
  return temp;
}
// Тестим сами используя функцию-утку
// function squared(x){return x**2};
// const newArr = map([1, 2, 3, 4], squared);
// console.log(newArr);
/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   reduce([1, 2, 3], (all, current) => all + current) // 6
 */
function reduce(array, fn, initial) {
  // var temp = initial||0;
  const isUndefined = typeof initial !== 'undefined';
  let temp = isUndefined ? initial : array[0];

  // let start = initial||0;
  // let temp = 0;
  for (let i = isUndefined ? 0 : 1; i < array.length; i++) {
    temp = fn(temp, array[i], i, array);
  }
  // return temp + start;
  return temp;
}

// const newArr = reduce([1, 2, 3],  (all, current) => all + current, 5);
// console.log(newArr);
// console.log([1, 2, 3].reduce(function(sumVal, curVal){return sumVal + curVal}, 5));

//
// 5
// [1, 2 , 3] squared
// 5 = 5 + squared(arr[0])  // 5 + 1 ==> temp = 6
// 6 = 6 + squared(arr[1]==2) // 6 + 4 == > temp = 10
// 10 = 10 + squared(arr[2]==3) // 10 + 9 ==> 19
/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  //  var objects = { name: 'Сергей', lastName: 'Петров'};
  //  console.log(objects.toUpperCase());

  return Object.keys(obj).map((key) => key.toUpperCase());

  // Метод Object.keys возвращает массив строковых элементов, соответствующих именам перечисляемых свойств,
}

/*
 Задание 5 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат

 Пример:
   const obj = createProxy({});
   obj.foo = 2;
   console.log(obj.foo); // 4
 */
function createProxy(obj) {}

export { forEach, map, reduce, upperProps, createProxy };
