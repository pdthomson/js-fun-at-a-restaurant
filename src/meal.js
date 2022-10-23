module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}

function nameMenuItem(...food) {
  var deliciousFood = 'Delicious' + ' ' + food;
  return deliciousFood;
}

function createMenuItem(name, price, type){
var menuObject = {
  name: name,
  price: price,
  type: type
};

return menuObject;
}

function addIngredients(food, ingredients){
  if (ingredients.includes(food)){
    return ingredients;
  } else
  {ingredients.push(food)};
}

function formatPrice(unformattedPrice) {
  return `$${unformattedPrice}`
}

function decreasePrice(priceInteger) {
  // var tenPercentDiscount = priceInteger * .1;
  // var discountedPrice = priceInteger - tenPercentDiscount;

  // return discountedPrice
  return priceInteger * .9
}

function createRecipe(title, ingredients, type) {
  var recipeObject = {
    title: title,
    ingredients: ingredients, 
    type: type
  };

  return recipeObject;
}
  
