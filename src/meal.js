function nameMenuItem(item) {
  return `Delicious ${item}`
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }
}

function addIngredients(newIngredient, ingredients) {
  if (ingredients.indexOf(newIngredient) === -1){
    ingredients.push(newIngredient)
  }
}

function formatPrice(price){
  return "$"+price.toString()
}

function decreasePrice(oldPrice) {
  return oldPrice * .9
}

function createRecipe(title, ingredients, menuItemType) {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
