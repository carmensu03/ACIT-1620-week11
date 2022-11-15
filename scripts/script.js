// function greet(userName, time = "day") {
//     return(`Good ${time} ${userName}`)
// }

// const result = greet("Carmen", "Night");
// console.log(result)
// greet("Neda");

// let greet = function(userName) {

//     console.log(`Hello ${userName}`)
// };

// let greet = (userName) => {
//     console.log(`Hello ${userName}`)
// }

// greet("Neda");

// makeNoise();

// function makeNoise() {
//     console.log("Pling!")
// }

const unorderedListElement = document.querySelector(".shopping");//DOM element
function populateList (list)
{
    // for (let item of list)
    // {

    // }

    for (let i = 0; i < list.length; i ++)
    {
        console.log(list[i])
        const listItemElement = document.createElement("li");
        listItemElement.textContent = list[i];
        unorderedListElement.appendChild(listItemElement);
    }
}
let shoppingList = ["cheese", "bread", "green pepper"];
populateList(shoppingList);