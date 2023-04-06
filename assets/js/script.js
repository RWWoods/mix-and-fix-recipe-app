var luckyCocktail = function (stuff) {
    for (var i = 0; i < stuff.length; i++) {
        console.log(stuff);
        
    }
}

function randomDrink() {
var requestUrl = "https://thecocktaildb.com/api/json/v1/1/random.php"

fetch(requestUrl)
.then(function (response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    luckyCocktail(data);
})

}



randomDrink();

// var randomCocktailButton = document.querySelector("#luckyCocktail")

// randomCocktailButton.addEventListener("click", function(event) {
//     event.preventDefault();
//     document.location.assign('./drink.html')
//     results.appendChild("Hello");
// })

// function cocktailName(data) {

//     for (var i = 0; i < data.drinks.length; i++) {
//         var drink= data.drinks[i];
//         var drinkName = drink.strDrink;

//         var drinkList = document.createElement("button");
//         drinkList.textContent = drinkName;
//         results.appendChild(drinkList);

//         drinkList.addEventListener("click", function(event) {
//           event.preventDefault;
//           createRecipebyName (data);
//           // console.log(data);
          
//         }); 
//     };
// }


// var homeButton = document.querySelector()
// homeButton.addEventListener("click", function(event) {
//     event.preventDefault();
//     document.location.assign('./index.html')
// })