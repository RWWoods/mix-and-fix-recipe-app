var APIkey = "1";

var cocktailNameInput= document.querySelector("#cocktail-name-input")

var cocktailNameButton = document.querySelector("#cocktail-name-button")

var cocktailIngredientInput = document.querySelector("#cocktail-ingredient-input")

var cocktailIngredientButton = document.querySelector("#cocktail-ingredient-button")

var recipeList = document.querySelector('ul');

console.log(recipeList);

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


  // fetch(requestUrl)
  // .then(function (response) {
  //   return response.json();
  // })
  // .then(function (data) {
  //   for (var i = 0; i < data.length; i++) {
  //     var listItem = document.createElement('li');
  //     listItem.textContent = data[i].html_url;
  //     repoList.appendChild(listItem);
  //   }
  // });


  function getApi() {

    var requestUrl = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

  fetch(requestUrl)
  .then(function (response) {
    return response.json(); })
    .then(function(data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        
        listItem.innerHTML = data[i].idDrink;
        recipeList.appendChild(listItem);
      }
      console.log(data[i]);
    })
  }

  cocktailNameButton.addEventListener('click', getApi);