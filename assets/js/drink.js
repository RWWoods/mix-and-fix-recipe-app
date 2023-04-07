var APIkey = "1";

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
        drinkList.setAttribute("class", "drinkButtons")
        drinkList.textContent = drinkName;
        results.appendChild(drinkList);  

        drinkList.addEventListener("click", function (event) {
          event.preventDefault();
          var drinkButton= event.target.textContent
        console.log(event.target)
          createRecipebyName(drinkButton, data);
      });
    };


 console.log(data);
};

function createRecipebyName (drinkButton, data) {
    

    for (var i = 0; i < data.drinks.length; i++) {
      if (drinkButton === data.drinks[i].strDrink) {
        var drink2 = data.drinks[i];
        var glass = drink2.strGlass
        var ingredients = [drink2.strIngredient1, drink2.strIngredient2, drink2.strIngredient3,
         drink2.strIngredient4, drink2.strIngredient5, drink2.strIngredient6, drink2.strIngredient7, 
         drink2.strIngredient8, drink2.strIngredient9, drink2.strIngredient10, drink2.strIngredient11, 
         drink2.strIngredient12, drink2.strIngredient13, drink2.strIngredient14, drink2.strIngredient15]
         
         ingredients= ingredients.filter(function(element){
          return element != null
         });
          
  

        var measure = [drink2.strMeasure1, drink2.strMeasure2, drink2.strMeasure3, drink2.strMeasure4,
        drink2.strMeasure5, drink2.strMeasure6, drink2.strMeasure7, drink2.strMeasure8, drink2.strMeasure9,
        drink2.strMeasure10, drink2.strMeasure11,drink2.strMeasure12, drink2.strMeasure13, drink2.strMeasure14,drink2.strMeasure15]

        measure = measure.filter(function(element){
          return element != null
         }); 

        var instructions = drink2.strInstructions;



            console.log(ingredients)
        var recipe = "Glass Type: " + glass + ".  " + "Ingredients :" + ingredients.join(", ") + ". " +
        "Measurements by Ingredients: " + measure.join(", ") + ". " + "Instructions: " + instructions;

        var createRecipe = document.createElement("li")
        createRecipe.textContent = recipe;
        createRecipe.setAttribute("class", "drinkButtons");
        results.appendChild(createRecipe); };

        // localStorage.setItem("lastCocktail", createRecipe)
    }
    console.log(data)
};


//This function is the fetch request for the "Search Cocktail by Name" option. It calls the cocktailName function.
function cocktailNameFetch (name) {
  // localStorage.removeItem("lastCocktail")
    fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=" + name).then(function(response){
      return response.json()
    }).then(function(data){
      cocktailName(data);
  });
};

//This click event takes the user's input and calls the fetch request function based on said input. 

  cocktailNameButton.addEventListener("click", function(event){
    if (cocktailNameInput.value !== "") {
    cocktailNameFetch(cocktailNameInput.value);
    results.innerHTML= " ";
};

  });



///////////////////////////////////////////////////////////////////

  // This function displays a list of drink names based on the ingredient the user inputs. 


  function cocktailIngredient(data) {
    
    for (var i = 0; i < data.drinks.length; i++) {
        var drinkbyIngredient= data.drinks[i];
        var ingredients = drinkbyIngredient.strDrink;

        var optionList = document.createElement("button")
        optionList.textContent = ingredients;
        optionList.setAttribute("class", "drinkButtons");
        results.appendChild(optionList);   
      };

    console.log(data)
};
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
    results.innerHTML= " ";
  });

  // results.textContent = localStorage.getItem("lastCocktail");
