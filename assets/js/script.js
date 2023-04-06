
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

function luckyCocktail(data) {
    var luckyDrink = data.drinks[0]
    luckyDrink.strDrink
    console.log(data.drinks)
}


    


randomDrink();

// var randomCocktailButton = document.querySelector("#luckyCocktail")

// randomCocktailButton.addEventListener("click", function(event) {
//     event.preventDefault();
//     document.location.assign('./drink.html')
//     results.appendChild("Hello");
// })

