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

function changeListStyle()
{
    unorderedListElement.classList.add("squareList");
    unorderedListElement.classList.remove("circleList");

    // unorderedListElement.classList.replace("circleList", "squareList");
}

changeListStyle()

function updateImage()
{
    const imgElement = document.querySelector("#shoppingCart")
    console.log(imgElement);
    imgElement.src = "https://cdn-icons-png.flaticon.com/512/263/263142.png";
    imgElement.width = 100;
    imgElement.height = 100;
    imgElement.alt = "shoppping cart icon"
}

updateImage();

function findGreen()
{
    const listItems = document.querySelectorAll(".shopping li")
    for (let i = 0 ; i < listItems.length; i++)
    {
        console.log(listItems[i]);
        if (listItems[i].textContent.includes("green"))
        {
            listItems[i].classList.add("greenText");
        }

    }
    
}

findGreen();