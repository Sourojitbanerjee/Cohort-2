// const personArray = ["Sourojit", "rishaan", "raman"];
// console.log(personArray[0])

// const ages = [12, 45, 34, 67, 24, 56, 68];
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] % 2 == 0){
//         console.log(ages[i]);
//     }
// }

// const personArray = ["Sourojit", "Jason", "Michael", "Britney"];
// const genderArray = ["male", "male", "male","female"];



// for(let i=0; i,personArray.length; i++){
//     if(genderArray[i] == "male"){
//         console.log(personArray[i]);
//     }
// }

// const user1 = {
//     firstName: "Sourojit",
//     gender: "male"
// }
// console.log(user1["gender"])


// const user2 = {
//     firstName: "Shanaya",
//     gender: "female"
// }

// console.log(user2["gender"]);



const allusers =[{
    firstName: "sourojit",
    gender: "male"
},
{
    firstName: "Jason",
    gender: "male"
},
{
    firstName: "Shanaya",
    gender: "female"
}]
for(let i = 0; i<allusers.length; i++){
    if(allusers[i]["gender"] == "female"){
        console.log(allusers[i]["firstName"]);
    }
}