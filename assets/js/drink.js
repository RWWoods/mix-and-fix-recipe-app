var cocktailNameInput= document.querySelector("#cocktail-name-input")

var cocktailNameButton = document.querySelector("#cocktail-name-button")

var cocktailIngredientInput = document.querySelector("#cocktail-ingredient-input")

var cocktailIngredientButton = document.querySelector("#cocktail-ingredient-button")


function cocktailName(data) {
    console.log(data)
}

function cocktailNameFetch (name) {
    fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=" + name).then(function(response){
      return response.json()
    }).then(function(data){
      cocktailName(data);
    });
  };


  cocktailNameButton.addEventListener("click", function(event){
    cocktailNameFetch(cocktailNameInput.value)
  });




  function cocktailIngredient(data) {
    console.log(data)
} 

function cocktailIngredientFetch (ingredient) {
    fetch("https://thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient).then(function(response){
      return response.json()
    }).then(function(data){
      cocktailIngredient(data);
    });
  };


  cocktailIngredientButton.addEventListener("click", function(event){
    cocktailIngredientFetch(cocktailIngredientInput.value)
  });