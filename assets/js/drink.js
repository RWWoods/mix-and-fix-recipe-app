var cocktailNameInput= document.querySelector("#cocktail-name-input")

var cocktailNameButton = document.querySelector("#cocktail-name-button")


function cocktailName(data) {
    console.log(data)
}

function cocktailNameFetch () {
    fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita").then(function(response){
      return response.json()
    }).then(function(data){
      cocktailName(data);
    });
  };


  cocktailNameButton.addEventListener("click", function(event){
    cocktailNameFetch(cocktailNameInput.value)
  });