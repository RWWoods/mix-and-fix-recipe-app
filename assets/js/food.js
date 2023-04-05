var dishNameInput = document.querySelector("#dish-name-input")

var dishNameButton = document.querySelector("#dish-name-button")

var dishIngredientInput = document.querySelector("#dish-ingredient-input")

var dishIngredientButton = document.querySelector("#dish-ingredient-button")

var results = document.getElementById("results")

function dishName(data) {

    for (var i = 0; i < data.meals,length; i++) {
        var meal= data.meals[i];
        var mealName = meal.strMeal;

        var mealList = document.createElement("li")
        mealList.textContent = mealName;
        results.appendChild(mealList)
    }

    console.log(data)
}

function dishNameFetch(name) {
    fetch("https://themealdb.com/api/json/v1/1/search.php?s=" + name).then(function (response) {
        return response.json()
    }).then(function (data) {
        dishName(data);
    });
};


dishNameButton.addEventListener("click", function (event){
    dishNameFetch(dishNameInput.value)
});




function dishIngredient(data) {
    console.log(data)
}

function dishIngredientFetch(ingredient) {
    fetch("https://themealdb.com/api/json/v1/1/filter.php?i==" + ingredient).then(function (response) {
        return response.json()
    }).then(function (data) {
        dishIngredient(data);
    });
};


dishIngredientButton.addEventListener("click", function (event) {
    dishIngredientFetch(dishIngredientInput.value)
});