//Question # 01
// var itemsArray = [
//     { name: 'juice', price: 50, quantity: 3 },
//     { name: 'cookie', price: 40, quantity: 4 },
//     { name: 'chocolate', price: 20, quantity: 5 },
//     { name: 'protein', price: 80, quantity: 6 },
// ];

// var Pricejuice = itemsArray[0].price * itemsArray[0].quantity;
// var Pricecookie = itemsArray[1].price * itemsArray[1].quantity;
// var Pricechocolate = itemsArray[2].price * itemsArray[2].quantity;
// var Priceprotein = itemsArray[3].price * itemsArray[3].quantity;

// console.log(Pricejuice);
// console.log(Pricecookie);
// console.log(Pricechocolate);
// console.log(Priceprotein);


//Question # 02
// var createObject = {
//     firstName : "Mansoor",
//     lastName : "Akhter",
//     email : "mansoor21st@gmail.com",
//     password : "12345678",
//     age : 30,
//     gender : "male",
//     city : "Karachi",
//     country : "Pakistan"
// }
// console.log("firstName" in createObject);
// console.log("lastName" in createObject);
// console.log("age" in createObject);
// console.log("email" in createObject);
// console.log("password" in createObject);
// console.log("country" in createObject);
// console.log("gender" in createObject);
// console.log("city" in createObject);


//Question # 03
// function Record(name, age, city, country){
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.country = country;
//     console.log(name, age, city, country);
// }
// var record1 = new Record('Mansoor','20','Karachi','Pakistan');
// var record2 = new Record('Nabeel','22','Karachi','Pakistan');
// var record3 = new Record('Ali','24','Karachi','Pakistan');
// Record(record1,record2,record3);


//Question # 04
// var btn = document.getElementsByTagName('button');
// var fname = document.getElementById('fname');
// var male = document.getElementById('male');
// var female = document.getElementById('female');
// var address = document.getElementById('address');
// var profession = document.getElementById('profession');
// var education = document.getElementById('education');
// var inputDiv=document.getElementById("inputData");


//   function submission() {
//     function Population(name, male, female, address, education, profession,inputDiv) {
//         this.myname = name;
//         this.mygender = male;
//         this.mygender = female;
//         this.myaddress = address;
//         this.myeducation = education;
//         this.myprofession = profession;
//         this.div=inputDiv;

//     }

//     if(education.children[0].checked) {
//         educationValue = "matric";
//     } else if (education.children[3].checked) {
//         educationValue = "inter";
//     } else if (education.children[6].checked) {
//         educationValue = "graduation";
//     }

//     if(profession.children[0].checked) {
//         professionValue = "student";
//     } else if (profession.children[3].checked) {
//         professionValue = "business";
//     } else if (profession.children[6].checked) {
//         professionValue = "job";
//     }

//         var bioData = new Population(fname.value, male.value, female.value, address.value, educationValue, professionValue);
   
//     console.log(bioData);

// }

