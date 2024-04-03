//Array Methods

//push : dizinin sonuna eleman ekler , ayrica dizinin uzunlugunu doner
// unshift : dizinin başına eleman ekler, eleman sayısını geriye doner


// pop : dizinin sonundan eleman siler , silinen elemani dondurur
// shift : dizinin basindan eleman siler, silinen elemani doner


// splice(index, incdex) eleman eklemek ve silmek için kullanılır.


// toString: diziyi stringe çevirebiliriz.
// join : diziyi stringe çevirir. Farkı ise araya eleman ekleyebiliriz


// concat: dizileri birlestirmek için kullanılır.

// slice(dilimlemek) : diziyi istenilen yerden bölüp yeni bir dizi olusturu

// length: dizinin uzunluğunu verir.

// reverse: dizinin elemanlarını ters çevirmek

// split(bölmek) : belirli bir ifadeye göre bölüp diziye çevirmek.

// indexOf elemanın index numarasını verir.

// includes: verilen elemanı içeriyor mu ona bakar

let cars = ["bmw", "mercedes", "reanult", "toyota", "porche"]
// cars.push("opel")
// console.log(cars) //sonuna opel elave olunmus arrayi qaytaracaq

// carslength = cars.push("opel") // birseye menimsetdiyimizde elave olunduqdan sonraki uzunlugu qaytaracaq
// console.log(carslength)

// cars.unshift("hundai") //evveline elave eder
// console.log(cars) 

// cars.pop()
// console.log(cars);// sondan 1ini silir

// a=cars.pop()// silinen elemani dondurur
// console.log(a);

// cars.shift() //evvelden 1ini silir
// console.log(cars);

// a=cars.shift() // silinen elemani dondurur
// console.log(a); 


//  cars.splice(2,1,"hundai") //(baslangiz index, nechesini sil, neyi elave et)
//  console.log(cars); 

// cars.splice(2,1)  //(burdan basla,bu qederini sil)


// let strCars= cars.toString()
// console.log(typeof(strCars)); // string dondurecek


// let joinCars=cars.join("-") //stringe cevirir ve yazdigimiz isareyle birlesdirir
// console.log(joinCars);

// let cars2=["prius","audi"]
// a=cars.concat(cars2)
// console.log(a);

// let newcars = cars.slice(2)//2ci indexden basla sona kimi ayri bir arraya menimset
// console.log(newcars);

// cars.reverse() //ters cevirir
// console.log(cars);


// let names = "rena,nigar,gunay"  
// namesArray=names.split(",")  // stringde verilmis her hansi bir yazini verdiyimiz chara gore bolur arraye ayri ayri stringler seklinde yigir
// console.log(namesArray);

