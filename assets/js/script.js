var randomCocktailButton = document.querySelector("#luckyCocktail");

var drinkTile = document.querySelector("#drink-column");

function randomDrink() {
    var requestUrl = "https://thecocktaildb.com/api/json/v1/1/random.php"

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            luckyCocktail(data);
        })

}

function luckyCocktail(data) {
    var luckyDrink = data.drinks[0]
    console.log(luckyDrink.strDrink);


    var ingredients = [luckyDrink.strIngredient1, luckyDrink.strIngredient2, luckyDrink.strIngredient3,
    luckyDrink.strIngredient4, luckyDrink.strIngredient5, luckyDrink.strIngredient6, luckyDrink.strIngredient7,
    luckyDrink.strIngredient8, luckyDrink.strIngredient9, luckyDrink.strIngredient10, luckyDrink.strIngredient11,
    luckyDrink.strIngredient12, luckyDrink.strIngredient13, luckyDrink.strIngredient14, luckyDrink.strIngredient15]

    ingredients = ingredients.filter(function (element) {
        return element != null
    })

    var measure = [luckyDrink.strMeasure1, luckyDrink.strMeasure2, luckyDrink.strMeasure3, luckyDrink.strMeasure4,
        luckyDrink.strMeasure5, luckyDrink.strMeasure6, luckyDrink.strMeasure7, luckyDrink.strMeasure8, luckyDrink.strMeasure9,
        luckyDrink.strMeasure10, luckyDrink.strMeasure11, luckyDrink.strMeasure12, luckyDrink.strMeasure13, luckyDrink.strMeasure14, luckyDrink.strMeasure15]

    measure = measure.filter(function (element) {
        return element != null
    });

    var instructions = luckyDrink.strInstructions;
    var recipe = "Cocktail Name: " + luckyDrink.strDrink + ". " + ingredients.join(", ") + ". " + measure.join(", ") + ". " + instructions;

    drinkTile.textContent = recipe;

}





// randomDrink();


randomCocktailButton.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    randomDrink();

})

