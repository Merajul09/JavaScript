
// const dayOfWeek = 3;

// switch (dayOfWeek) {
//     case 1:
//         console.log("saturday");
//         break;
//     case 2:
//         console.log("sunday");
//         break;
//     case 3:
//         console.log("Monday");
//         break;
//     case 4:
//         console.log("Tuesday");
//         break;
//     case 5:
//         console.log("Wednesday");
//         break;
//     case 6:
//         console.log("Thursday");
//         break;
//     case 7:
//         console.log("Friday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// --------------------------------------------
// const lightCondition = true;

// switch (lightCondition) {
//     case true:
//         console.log('light On 💡');
//         break;
//     case false:
//         console.log('Light Off 🕯️');
//         break;
//     default:
//         console.log('Your provided value is not correct');
// }

// ------------------------------------------------

// const light = 'true';

// switch (true) {
//     case light:
//         console.log('light On 💡');
//         break;
//     default:
//         console.log('Light Off 🕯️');
// }

// ----------------------------------------------

// function calcGrading(score) {
//     let gradingScore
//     switch (true) {
//         case (score <= 100 && score >= 90):
//             gradingScore = "A";
//             break;
//         case (score <= 89 && score >= 70):
//             gradingScore = "B";
//             break;
//         case (score <= 69 && score >= 60):
//             gradingScore = "C";
//             break;
//         case (score <= 59 && score >= 0):
//             gradingScore = "F";
//             break;
//         case (score > 100 && score < 0):
//             gradingScore = "Invalid Score";
//             break;
//         default:
//             return "Invalid Score";
//     }
//     return `You got ${gradingScore} Grade.`;
// }
// const firstPerson = calcGrading(99);
// console.log(firstPerson);

// -----------------------------------------------

function categoryFruit(name) {
    switch (name.toLowerCase()) {
        case "apple":
        case "pear":
        case "banana":
            console.log(`${name} is a common fruit`)
            break;
        case "orange":
        case "grape":
        case "water-melon":
            console.log(`${name} is a lemon fruit`)
            break;
        default:
            console.log(`${name} is not recognized`)
    }
}
categoryFruit("apple")
categoryFruit("pear")
categoryFruit("banana")
categoryFruit("orange")
categoryFruit("grape")
categoryFruit("water-melon")
categoryFruit("mango")