var dishNameInput = document.querySelector("#dish-name-input")

var dishNameButton = document.querySelector("#dish-name-button")

var dishIngredientInput = document.querySelector("#dish-ingredient-input")

var dishIngredientButton = document.querySelector("#dish-ingredient-button")

var results = document.getElementById("results")

function dishName(data) {

    for (var i = 0; i < data.meals.length; i++) {
        var meal = data.meals[i];
        var mealName = meal.strMeal;

        var mealList = document.createElement("button")
        mealList.textContent = mealName;
        results.appendChild(mealList);
        mealList.setAttribute("class", "drinkButtons")
        mealList.addEventListener("click", function (event) {
            event.preventDefault();
            var mealButton= event.target.textContent
          console.log(event.target)
            createRecipebyName(mealButton, data);
        });
    };

    console.log(data)
};

function createRecipebyName(mealButton, data) {


    for (var i = 0; i < data.meals.length; i++) {
        if (mealButton === data.meals[i].strMeal) {
            var meal2 = data.meals[i];
            var glass = meal2.strGlass
            var ingredients = [meal2.strIngredient1, meal2.strIngredient2, meal2.strIngredient3,
            meal2.strIngredient4, meal2.strIngredient5, meal2.strIngredient6, meal2.strIngredient7,
            meal2.strIngredient8, meal2.strIngredient9,
            meal2.strIngredient10, meal2.strIngredient11,
            meal2.strIngredient12, meal2.strIngredient13,
            meal2.strIngredient14, meal2.strIngredient15]

            ingredients = ingredients.filter(function(element) {
                return element != null
            });

            var measure = [meal2.strMeasure1, meal2.
                strMeasure2, meal2.strMeasure3, meal2.strMeasure4,
            meal2.strMeasure5, meal2.strMeasure6, meal2.strMeasure7, meal2.strMeasure8, meal2.strMeasure9, meal2.strMeasure10, meal2.strMeasure11, meal2.streaMeasure12, meal2.strMeasure13, meal2.strMeasure14, meal2.strMeasure15]

            measure = measure.filter(function (element) {
                return element != null
            });

            var instructions = meal2.strInstructions;

            console.log(ingredients)
            var recipe = glass + ".  " + ingredients.join(",  ") + ". " + measure.join(", ") + ".  " + instructions;

            var createRecipe = document.createElement("li")
            createRecipe.textContent = recipe;
            results.appendChild(createRecipe);
        
        console.log(data)
    };
    };
};

    function dishNameFetch(name) {
        fetch("https://themealdb.com/api/json/v1/1/search.php?s=" + name).then(function (response) {
            return response.json()
        }).then(function (data) {
            dishName(data);
        });
    };


    dishNameButton.addEventListener("click", function (event) {
        if (dishNameInput.value !== "") {
            dishNameFetch(dishNameInput.value)
        };
        results.innerHTML= " ";
    });




    function dishIngredient(data) {
        for (var i = 0; i < data.meals.length; i++) {
            var dishbyIngredient = data.meals[i];
            var ingredients = dishbyIngredient.strMeal;

            var optionList = document.createElement("button")
            optionList.textContent = ingredients;
            optionList.setAttribute("class", "drinkButtons");
            results.appendChild(optionList);

        };

        console.log(data)
    }

    function dishIngredientFetch(ingredient) {
        fetch("https://themealdb.com/api/json/v1/1/filter.php?i=" + ingredient).then(function (response) {
            return response.json()
        }).then(function (data) {
            dishIngredient(data);
        });
    };


    dishIngredientButton.addEventListener("click", function (event) {
        dishIngredientFetch(dishIngredientInput.value);
        results.innerHTML= " ";
    });
    