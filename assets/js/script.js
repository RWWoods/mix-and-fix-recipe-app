var randomCocktailButton = document.querySelector("#luckyCocktail");

var randomFoodButton = document.querySelector("#luckyMeal");

var mealTile = document.querySelector("#food-column");

var drinkTile = document.querySelector("#drink-column");


function randomMeal() {
    var requestUrl = "https://themealdb.com/api/json/v1/1/random.php"
    localStorage.removeItem("lastMeal");

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            luckyMeal(data);
        })

}

function luckyMeal(data) {
    var luckyMeal = data.meals[0]
    console.log(data);


    var ingredients = [luckyMeal.strIngredient1, luckyMeal.strIngredient2, luckyMeal.strIngredient3,
        luckyMeal.strIngredient4, luckyMeal.strIngredient5, luckyMeal.strIngredient6, luckyMeal.strIngredient7,
        luckyMeal.strIngredient8, luckyMeal.strIngredient9, luckyMeal.strIngredient10, luckyMeal.strIngredient11,
    luckyMeal.strIngredient12, luckyMeal.strIngredient13, luckyMeal.strIngredient14, luckyMeal.strIngredient15]

    ingredients = ingredients.filter(function (element) {
        return element != null
    })

    var measure = [luckyMeal.strMeasure1, luckyMeal.strMeasure2, luckyMeal.strMeasure3, luckyMeal.strMeasure4,
        luckyMeal.strMeasure5, luckyMeal.strMeasure6, luckyMeal.strMeasure7, luckyMeal.strMeasure8, luckyMeal.strMeasure9,
        luckyMeal.strMeasure10, luckyMeal.strMeasure11, luckyMeal.strMeasure12, luckyMeal.strMeasure13, luckyMeal.strMeasure14, luckyMeal.strMeasure15]

    measure = measure.filter(function (element) {
        return element != null
    });

    var instructions = luckyMeal.strInstructions;
    var foodRecipe = "Meal Name: " + luckyMeal.strMeal + ". " + "Ingredients: " + ingredients.join(", ") + ". " +
    "Measurements: " + measure.join(", ") + ". " + "Instructions: " + instructions;

    mealTile.textContent = foodRecipe;
    localStorage.setItem("lastMeal", foodRecipe);
}




function randomDrink() {
    var requestUrl = "https://thecocktaildb.com/api/json/v1/1/random.php"
    localStorage.removeItem("lastDrink");

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
    var recipe = "Cocktail Name: " + luckyDrink.strDrink + ". " + "Ingredients: " + ingredients.join(", ") + ". " + "Measurements: " + measure.join(", ") + ". " 
    + "Instructions: " + instructions;

    drinkTile.textContent = recipe;
    localStorage.setItem("lastDrink", recipe);

}




randomCocktailButton.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    randomDrink();

})

randomFoodButton.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    randomMeal();

})

drinkTile.textContent = localStorage.getItem("lastDrink");
mealTile.textContent = localStorage.getItem("lastMeal");