let firstStudent = {name: "Ira", city: "Guntur", country: "India"};
console.log(firstStudent);

let arrayConstructor = new Array();
arrayConstructor[0] = 2;
arrayConstructor[1] = 3;
arrayConstructor[4] = 3;
console.log(arrayConstructor);

let arrayConstructor2 = new Array("Ram", "Shayam");
console.log(arrayConstructor2);

let filledArray = Array(5).fill(0);
console.log(filledArray);

let filledArray2 = Array(5).fill("ram");
console.log(filledArray2);

let ofArray = Array.of("of", "Ram", "Shayam");
console.log(ofArray);

let fromArray = Array.from("Hello");
console.log(fromArray);

let sparseArray = [4, , 6];
console.log(sparseArray);
sparseArray[1] = 18;
console.log(sparseArray);

let sparseArray2 = [4, , , ,7];
console.log(sparseArray2);
sparseArray2[2] = 12;
sparseArray2[3] = 13;
console.log(sparseArray2);

let ofArrayplus = ["Plus", ...ofArray];
console.log(ofArrayplus);