// Demo

// "Bmw,Mercedes,Opel,Mazda" elemanlaarına sahip bir dizi oluşturun. ♥♥♥♥♥♥
let val = ["Bmw", "Mercedes", "Opel", "Mazda"]; //

console.log(val);

// Dizi kaç elemanlıdır ? ♥♥♥♥♥♥

console.log(val.length);

// Dizinin ilk ve son elemanı nedir ?  ♥♥♥♥♥♥

console.log(val[0]);

console.log(val[3]);

// "Renault" değerini dizinin sonuna ekleyin. ♥♥♥♥♥♥

// val.push("Renault");

val[4] = "Renault";

// "Toyota" değerini dizinin başına ekleyin. ♥♥♥♥♥♥

// val.unshift("Toyota");

val[0] = "Toyota";

// "Renault" değerini siliniz.  ♥♥♥♥♥♥

val.pop();

// "Toyota" değerini siliniz. ♥♥♥♥♥♥

val.shift();

// Dizi elemanlerını ters çevirin  ♥♥♥♥♥♥

val.reverse();

// Dizi elemanlarını alfabetik olarak sıralayın ♥♥♥♥♥♥

val.sort();

// [1,2,5,80] dizisini sıralayınız ?????????

let numbers = [1, 5, 3, 80, 25];

console.log(numbers);



//"Opel" değeri dizinin bir elemanı mıdır ?  ♥♥♥♥♥♥

let index = val.indexOf("Opel");

console.log(index);
// console.log(val.includes("Opel"));


// let str = "Chevrolet ,Dacia"    ifadesini diziye çeviriniz   ?????

let str = "Chevrolet ,Dacia";

let array = str.split(",");

console.log(array);

// Oluşturulan 2 dizinin elemanlarınnı bir başka dizi ile  birleştirin ???

let con = val.concat(array);

console.log(con);

// Oluşturulan 2  diziden son 2 elemanı siliniz  ?????

//* console.log(con.pop());
//* console.log(con.pop());

console.log(con.splice(3, 2));

/** Aşağıda verilen elemanları bir dizi içerisinde saklayınız ????
    studentA : Yiğiti Bilgi 2010
    studentB : Sena Turan 1999
    studentC : Mehmet Yılmaz 1998
 */

let studentA = ["Yiğit", "Bilgi", "2010"];

let studentB = ["Sena", "Turan", "1999"];

let studentC = ["Mehmet", "Yılmaz", "1998"];

let students = [studentA, studentB, studentC];

console.log(students[0][0]);

console.log(students);