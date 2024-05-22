// console.log("Hello, World!")

import { log } from "console";

// // ASSIGMENT Node;2-------=======
// let Name: string='ammar'
// console.log('helo' + Name +'  would you like to learn some Python today?”' )

// ASSIGMENT NO ; 3--------======

// let Name: string = 'david millan'
// console .log('uppercase ' + Name.toUpperCase())
// console .log('lowercase ' + Name.toLowerCase ())
// console .log('titlecase ' + Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase())

// ASSIGMENT NO ; 4 ---------===========

// console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”')

// // ASSIGMENT NO ; 5--------========

// let Name: string = 'Albert Einstein'
// let Qoute: string = "“A person who never made a mistake never tried anyth ing new.”"
// console.log(Name + ' once said' + Qoute);

// ASSIGMENT NO ; 6 -----------===========
// let Name: string = "\t" + 'muneeb' + "\n"
// console.log(Name);

// consol .log(Name.trim())

// ASSIGMENT NO ; 7,8 ----------==========
// console .log(5 + 3)
// console .log(10 - 2)
// console .log(2 * 4)
// console .log(16 / 2)

// ASSIGNMENT NO ; 9 -----------============

// let Num: number = 8
// let message: string = 'This is my favourite number'
// console.log(Num + " "+ message)

// ASSIGNMENT NO ; 10

// NAME = MUNEEB
// DATE = 22/2/2024
// MESSAGE = when we do subtraction ; multipilication ; division ; and sum the result is 8.
// // console .log(5 + 3)
// // console .log(10 - 2)
// // console .log(2 * 4)
// // console .log(16 / 2)

// ASSIGNMENT NO ; 11--------==========

// let friends: string[] = ['ammar', 'asfand', 'aliyan','inaam']
// console.log(friends)

// ASSIGNMENT NO ; 12 --------========

// let friends: string[] = ['ammar', 'asfand', 'aliyan','inaam']
// friends.forEach ((friend) => console.log('hello ' + friend + ' how are you' ))

// ASSIGNMENT NO ; 13-----------==========
// let tranpotation: string[] = ['car', 'bus', 'motorcycle', 'truck']
// tranpotation.forEach ((elem) => console.log('“I would like to own a ”' + elem))

// ASSIGNMENT NO ;14-------==========

// let peopleNames: string[] = ['Asfand','ammar','inamm']
// peopleNames.forEach ((elem) => console.log(elem + ' we are inviting you on dinner'))

// ASSIGNMENT NO ;15-------==========
// let peopleNames: string[] = ['Asfand','ammar','inamm']
// const remove_person = peopleNames.shift()
// console.log(remove_person + ' sorry we are not invitng to you in a dinner')
// const add_person = peopleNames.unshift('jhon')
// console.log('These are remaing people')
// peopleNames.forEach ((elem) => console.log(elem + ' we are inviting you on dinner'))

// ASSIGNMENT NO ;16-------==========
// let peopleNames: string[] = ['Asfand','ammar','inamm']
// const add_beging = peopleNames.unshift('aliyan')
// const add_middle = peopleNames.splice(2, 0, 'umar')
// const add_last = peopleNames.push('fayaz')
//  peopleNames.forEach ((elem) => console.log(elem + ' we are inviting you in a biggest name  '))

//  ASSIGNMENT NO ;17-------==========/
// let peopleNames: string[] = ['Asfand','ammar','inamm']
// const remove_people = peopleNames.pop()
// console.log(remove_people + ' sorry bro u are not invite on dinner')
// peopleNames.forEach ((elem) => console.log(elem + 'u are still invited'))
// peopleNames.pop()
// peopleNames.pop()
// console.log(peopleNames)

// ASSIGNMENT NO ;18-------==========/
// let places: string[] = ['malaysia', 'pakistan','india', 'swiss','aghannitan']
// console.log(places)
// let new_places: string[] = [...places]
// console.log(new_places.sort())
// console.log(places)
// console.log(new_places.reverse())
// console.log(places)
// console.log(places.reverse())
// console.log(places.reverse())
// console.log(places.sort())

// ASSIGNMENT NO ;19-------==========/
// let peopleNames: string[] = ['Asfand','ammar','inamm']
// console.log(peopleNames.length)

// ASSIGNMENT NO ;20-------==========/
// let cities: string[] = ['karachi', 'mirpurkhas', 'lahore', 'islamabad', 'umerkot']
// cities.forEach ((elem) => console.log(elem))

// ASSIGNMENT NO ;21-------==========/
// let mobile:{name:string, price:number, colour:string} =
// {
// name: "iphone",
// price: 3200,
// colour: "black"
// }
// console.log(mobile)

// ASSIGNMENT NO ;22-------==========/
// let friends_name: string[] = ['ammar', 'asfand', 'shahbaz',]
// console.log(friends_name[3])
// console.log(friends_name)

// ASSIGNMENT NO ;23-------==========/
// let car = 'subaru';
// //for true
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// console.log("Is car === 'subaru'? I predict True.")
// console.log(car === 'subaru')
// console.log("Is car !== 'toyota'? I predict True.")
// console.log(car !== 'toyoto')
// console.log("Is car includes 'subaru'? I predict True.")
// console.log(car.includes('subaru') )
// console.log("Is car includes 'sub'? I predict True.")
// console.log(car.includes('sub') )

// //for false
// console.log("Is car == 'toyota'? I predict false.")
// console.log(car == 'toyota')
// console.log("Is car === 'toyota'? I predict True.")
// console.log(car === 'toyata')
// console.log("Is car !== 'subaru'? I predict True.")
// console.log(car !== 'subaru')
// console.log("Is car include 'toyota'? I predict True.")
// console.log(car.includes('toyota') )
// console.log("Is car include 'orv'? I predict True.")
// console.log(car.includes('orc'))

// ASSIGNMENT NO 24;--------------=======//
//  let city:string = "karachi"
//  console.log(city === 'karachi')
//  console.log(city === 'mirpurkhas')
// // for lowercase//
// console.log(city.toLowerCase() === "karachi")
// console.log(city.toUpperCase() === 'karachi')

// //  numerical test//
// let num2: number = 20
// // for equality, inequality
// console.log(num2 === 20)
// console.log(num2 === 15)
// // greater then & less then
// console.log(num2 > 15)
// console.log(num2 < 15)
// // greater than or equal to,
// console.log(num2 >= 20)
// // and less than or equal to
// console.log(num2 <= 18)

// // Tests using "and" and "or" operators//
// console.log(num2 === 20 && num2 > 18)
// console.log(num2 === 90 || num2 > 22)

// Test whether an item is in a array//
// let num3: number[] = [10, 15, 20, 25, 30]
// let num4: number[] = [10, 15, 20, 25, 30]
// console.log(num3[0] === num4[0])
// console.log(num3[2] === num4[4])

// ASSIGNMENT NO 25;--------------=======//
// let alien_color: string = "green"
// if(alien_color === "green"){
// console.log('that the player just earned 5 points.')
// }
// alien_color = 'red'
// if(alien_color === "green"){
//     console.log('that the player just earned 5 points.')
//     }

// ASSIGNMENT NO 26-----========//
// let alien_color: string = "green";
// if (alien_color === "green") {
//   console.log("that the player just earned 5 points.");
// } else {
//   console.log("that the player just earned 10 points.");
// }
// alien_color = 'red'
// if (alien_color === "green") {
//     console.log("that the player just earned 5 points.");
//   } else {
//     console.log("that the player just earned 10 points.");
//   }

// ASSIGNMENT NO 27-----========//
// let alien_color: string = "green";
// if (alien_color === "green") {
//   console.log("that the player just earned 5 points.");
// } else if (alien_color === "yellow"){
//     console.log("that the player just earned 10 points.");
// } else if(alien_color === "red") {
//     console.log("that the player just earned 15 points.")
// }
// alien_color = "yellow"
// if (alien_color === "green") {
//     console.log("that the player just earned 5 points.");
//   } else if (alien_color === "yellow"){
//       console.log("that the player just earned 10 points.");
//   } else if(alien_color === "red") {
//       console.log("that the player just earned 15 points.")
//   }

// alien_color = "red"
// if (alien_color === "green") {
//     console.log("that the player just earned 5 points.");
//   } else if (alien_color === "yellow"){
//       console.log("that the player just earned 10 points.");
//   } else if(alien_color === "red") {
//       console.log("that the player just earned 15 points.")
//   }

//   ASSINGMENT NO: 28------===//

// let personAge = 30;  // SET TH AGE HERE //
// if (personAge < 2) {
//   console.log("the person is baby");
// }else if(personAge >= 2 && personAge < 4){
//     console.log("that the person is a toddler. ")
// }else if(personAge >= 4 && personAge < 13){
//     console.log("that the person is a kid.")
// }else if(personAge>= 20 && personAge < 20){
//     console.log("that a person ia a teenager ")
// }else if(personAge >= 20 && personAge < 65){
//     console.log("that the person is an adult.")
// }else if (personAge >= 65 ){
//     console.log("that is a peron is elder")
// }else{
//     console.log("that a person is too old")
// }

// ASSIGNMENT NO: 29-------======//

// let favouriteFruites = ["bananas", "Apple", "Watermelen"]

// if(favouriteFruites.includes("orangr")){
//     console.log("You really like orange!")
// }
// if(favouriteFruites.includes("Apple")){
//     console.log("you realy like Apple")
// }

// if(favouriteFruites.includes("Watermelen")){
//     console.log("you realy like watermelen")
// }

// if(favouriteFruites.includes("kiwi")){
//     console.log("you realy like kiwi")
// }

// if(favouriteFruites.includes("bananas")){
//     console.log("you realy like bananas")
// }

// ASSIGNMENT NO: 30-----====///
// let greet = ["Adam", "john", "Eric", "Admin", "faiz"]
// for (let index = 0; index < greet.length; index++) {
//     if(greet[index]== "Admin"){
//         console.log(`hello ${greet[index]} would you like to see a status report?`)
//     }else{
//         console.log(`hello ${greet[index]} thank you for logging in again`)
//     }

//     }

// ASSIGNMENT NO : 31-----=======///

//     let usernames: string[] = ["admin", "Eric", "John", "Alice", "Bob"]; // Array of usernames

// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// } else {
//     for (let username of usernames) {
//         if (username === "admin") {
//             console.log("Hello admin, would you like to see a status report?");
//         } else {
//             console.log(`Hello ${username}, thank you for logging in again.`);
//         }
//     }
// }

// // Remove all usernames
// usernames = [];

// Check if the list of usernames is empty and print the appropriate message
// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// }

// ASSIGNMENT N0 : 32------=====//

// let current_users: string[] = ["john", "alice", "bob", "dave", "emily"]; // Existing usernames
// let new_users: string[] = ["emily", "sam", "john", "sarah", "mike"]; // New usernames to be checked

// // Convert all current usernames to lowercase for case-insensitive comparison
// let current_users_lower = current_users.map(user => user.toLowerCase());

// new_users.forEach(new_user => {
//     // Convert new username to lowercase for case-insensitive comparison
//     let new_user_lower = new_user.toLowerCase();

//     // Check if new username already exists in current_users
//     if (current_users_lower.includes(new_user_lower)) {
//         console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
//     } else {
//         console.log(`Congratulations! The username '${new_user}' is available.`);
//     }
// });

// ASSINMENT NO: 33------=====//

// let my_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < my_number.length; i++) {
//   if (my_number[i] == 1) {
//     console.log(`${my_number[i]}st`);
//   } else if (my_number[i] == 2) {
//     console.log(`${my_number[i]}nd`);
//   } else if (my_number[i] == 3) {
//     console.log(`${my_number[i]}rd`);
//   } else if (my_number[i] >= 4 || my_number[i] <= 9) {
//     console.log(`${my_number[i]}th`);
//   } else {
//     console.log("nothing get");
//   }
// }

// // ASSINGMENT N0 : 34-----====//

// let my_favt_pizza = ["fajita", "chicken cheez", "tikka cheez"];

// for (let i = 0; i < my_favt_pizza.length; i++) {
//   // printing message with them/
//   console.log(`i like to eat this ${my_favt_pizza[i]} pizza`);
// }
// console.log(
//   `i really like to eat pizza in very situation when i'm sad i want to eat pizza `
// );

// ASSINGMENT N0 : 35-----=====//

// let animal = ["Dog", "cat", "Ribbit"];

// for (let i = 0; i < animal.length; i++) {
//   let element = animal[i];
//   console.log(element);
// }

// // add message //

// for (let i = 0; i < animal.length; i++) {
//   let element = animal[i];
//   console.log(`A ${element} would make a great pet.`);
// }

// console.log(`these are those ${animal[0]}, ${animal[1]}, ${animal[2]} pets who easily live with humans`);


// ASSINGMENT N0 : 36-----======//

// function  make_shirt(size: string) {
//     return size
// }
// console.log(make_shirt("the size of shirt is medium"))


// ASSINGMENT N0 : 37-----======//

// modify the upper function  and use default value of parameter///

// let myFun =(label: string, size: string = "Large") =>{
//     return `the shirt dsign by ${label} and the size is of shirt ${size}`
// }
// console.log(myFun("muneeb ali "))

// and then change value of  size parameter into medium //
// let myFun =(label: string, size: string = "medium") =>{
//     return size + label
// }
// console.log(myFun("I love typescipt ")) 

// and then change value of  size parameter into any size //
// let myFun =(label: string, size: string = "") =>{
//     return size + label
// }
// console.log(myFun(" any size", " I love typescript")) 





// ASSINGMENT N0 : 38-----======//
  

// let describe_city =(city:string, country: string= "pakistan" ) =>{
//     return `${city} is in ${country}`
// }
// add cities //
// let city1 = describe_city("karachi")
// let city2 = describe_city("MPS")
// let city3 = describe_city("Larkana")
// let city4 = describe_city("dubai" , "uae")

// console.log(city1,)
// console.log(city2,)
// console.log(city3,)
// console.log(city4,)

// ASSINGMENT N0 : 39-----======//

// let city_country = (city : string , country: string) =>{
//     return city + country
// }
// console.log(city_country(" karachi", " pakistan"))
// console.log(city_country(" lahore", " pakistan"))
// console.log(city_country(" Delhi", " India"))
 


// // ASSINGMENT N0 : 40-----======//

// let make_album = (artistname:string, albumname: string, trachnumber: number) => {
//     return {artistname , albumname , trachnumber}
// }
// console.log(make_album("Ali zafar", "Rang - e Mohbt" , 50))
// console.log(make_album("Atif aslam", "Toota dil" , 40))
// console.log(make_album("Abda parveen", "Deewana bana rkha hai" , 30))

// added a optional parameter //
// let make_album1 = (artistname:string, albumname: string, tracknumber ?: number) => {
//     return {artistname , albumname , tracknumber}
// }
// console.log(make_album1("Ali zafar", "Rang - e Mohbt", 60))
// console.log(make_album1("Atif aslam", "Toota dil"))
// console.log(make_album1("Abda parveen", "Deewana bana rkha hai"  ))



// // ASSINGMENT N0 : 41-----======//

// let magician_name = ["ammar", "asfand", "aliyan", "shahbaz"]


// function show_magician () {
//     for (let index = 0; index < magician_name.length; index++) {
        
//         console.log(magician_name[index])
//     }
// }
// show_magician()



// // ASSINGMENT N0 : 42-----======//

// let magician_name = ["ammar", "asfand", "aliyan", "shahbaz"]


// function show_magician () {
//     for (let index = 0; index < magician_name.length; index++) {
        
//         console.log(magician_name[index])
//     }
// }
// function great () {
//     for (let index = 0; index < magician_name.length; index++) {
//         magician_name[index] = "The Great " + magician_name[index]
//         console.log()
//     }
// }

// great()
// show_magician()


// // ASSINGMENT N0 : 43-----======//


// let magician_name = ["ammar", "asfand", "aliyan", "shahbaz"];

// function show_magician(magicians :any) {
//     for (let index = 0; index < magicians.length; index++) {
//         console.log(magicians[index]); // Print each magician's name
//     }
// }

// function make_great(magicians: any ) {
//     let great_magicians = [];
//     for (let index = 0; index < magicians.length; index++) {
//         great_magicians.push("the Great " + magicians[index]); // Add "the Great" to each name and push to new array
//     }
//     return great_magicians;
// }

// // Make a copy of the original array and modify it
// let great_magician_names = make_great(magician_name.slice());

// // Show the original list
// console.log("Original Magicians:");
// show_magician(magician_name);

// // Show the modified list
// console.log("\nGreat Magicians:");
// show_magician(great_magician_names);




// // ASSINGMENT N0 : 44-----======//

// function sandwiches(...items: string []){
//     return `i want to sandwishes ${items}`
// }
// console.log(sandwiches("Turkey", "Lettuce", "Tomato"))
// console.log(sandwiches("lettuce", "turkey"))
// console.log(sandwiches( "Tomato"))




// // ASSINGMENT N0 : 45-----======//

// function car_details(manufactured: string, model:string, ...additional: string[][] ){
// const car = {manufactured , model , ...Object.fromEntries(additional)}
//     return car;
// }
// const my_car_detail = car_details("by Toyota", "Corolla", ['colour','blue'], ['year','2024'] )
// console.log(my_car_detail)

