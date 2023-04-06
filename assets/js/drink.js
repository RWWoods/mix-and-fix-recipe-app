var cocktailNameInput= document.querySelector("#cocktail-name-input")

var cocktailNameButton = document.querySelector("#cocktail-name-button")

var cocktailIngredientInput = document.querySelector("#cocktail-ingredient-input")

var cocktailIngredientButton = document.querySelector("#cocktail-ingredient-button")

var results = document.getElementById("results")

// This function displays the list of drink names the user can choose from based
// on the array that is curated when they input the name of their drink.

function cocktailName(data) {

    for (var i = 0; i < data.drinks.length; i++) {
        var drink= data.drinks[i];
        var drinkName = drink.strDrink;

        var drinkList = document.createElement("button");
        drinkList.textContent = drinkName;
        results.appendChild(drinkList);

        drinkList.addEventListener("click", function(event) {
          createRecipebyName(data)
        }); 
    };

 console.log(data);
};

function createRecipebyName (data) {
    

    for (var i = 0; i < data.drinks.length; i++) {
        var drink2 = data.drinks[i];
        var glass = drink2.strGlass
        var ingredients = drink2.strIngredient1 + " " + drink2.strIngredient2 + " " 
        + drink2.strIngredient3 + " " + drink2.strIngredient4 + " " + drink2.strIngredient5 +
        " " + drink2.strIngredient6 + " " + drink2.strIngredient7 + " " + drink2.strIngredient8
        + " " + drink2.strIngredient9 + " " + drink2.strIngredient10 + " " + drink2.strIngredient11
        + " " + drink2.strIngredient12 + " " + drink2.strIngredient13 + " " + drink2.strIngredient14
        + " " + drink2.strIngredient15;
        // maybe create an array of ingredient list instead of one variable of each ingredient?
        // maybe same logic for meaures ?
        var measure = drink2.strMeasure1 + drink2.strMeasure2 + drink2.strMeasure3
        var instructions = drink2.strInstructions;


        var recipe = glass + "  " + ingredients + "   " + measure + "  " + instructions;

        var createRecipe = document.createElement("li")
        createRecipe.textContent = recipe;
        results.appendChild(createRecipe);
    }
    console.log(data)
};


//This function is the fetch request for the "Search Cocktail by Name" option. It calls the cocktailName function.
function cocktailNameFetch (name) {
    fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=" + name).then(function(response){
      return response.json()
    }).then(function(data){
      cocktailName(data);
    });
    createRecipebyName(data);
  };

//This click event takes the user's input and calls the fetch request function based on said input. 

  cocktailNameButton.addEventListener("click", function(event){
    if (cocktailNameInput.value !== "") {
    cocktailNameFetch(cocktailNameInput.value);
}
  });



///////////////////////////////////////////////////////////////////

  // This function displays a list of drink names based on the ingredient the user inputs. 
  function cocktailIngredient(data) {
    
    for (var i = 0; i < data.drinks.length; i++) {
        var drinkbyIngredient= data.drinks[i];
        var ingredients = drinkbyIngredient.strDrink;

        var optionList = document.createElement("li")
        optionList.textContent = ingredients;
        results.appendChild(optionList);
    };

    console.log(data)
} 
// This function is the fetch request for the "Search by Ingredient" option. It calls the cocktailIngredient function.
function cocktailIngredientFetch (ingredient) {
    fetch("https://thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient).then(function(response){
      return response.json()
    }).then(function(data){
      cocktailIngredient(data);
    });
  };

// This click event takes the user's ingredient input and calls the fetch request function based on the user input.
  cocktailIngredientButton.addEventListener("click", function(event){
    cocktailIngredientFetch(cocktailIngredientInput.value)
  });