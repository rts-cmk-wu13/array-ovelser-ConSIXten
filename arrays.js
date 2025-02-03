document.addEventListener("DOMContentLoaded", function() {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder ---

//opgave 1
let filteredNumbers = numbersArray.filter((elements) => elements > 20);
console.log(filteredNumbers); 

//opgave 2
catsArray.push("Sniffles");
console.log(catsArray)


//opgave 3a
console.log(dogsArray.includes('Trixie'));

//opgave 3b
console.log(dogsArray.includes('Baxter'));

//Opgave 4a
let findCat = catsArray.find((element) => element == "Bagheera");
console.log(findCat)

//opgave 4b
let findCat2 = catsArray.find((element) => element == "Salem");
console.log(findCat2)
//opgave 5
const map1 = numbersArray.map((x) => x * 3)
console.log(map1)

}) // ends DOMContentLoaded