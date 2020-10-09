class Chef {
  constructor(name, restaurant) {
    this.name = name
    this.restaurant = restaurant
  }
  greetCustomer(name, isMorning){
    if (isMorning) {
      return `Good morning, ${name}!`
    }else{
      return `Hello, ${name}!`
    }
  }
  checkForFood(foodItem) {
    if (this.restaurant.menus[foodItem.type].indexOf(foodItem) > -1) {
      return `Yes, we're serving ${foodItem.name} today!`
    }else{
      return `Sorry, we aren't serving ${foodItem.name} today.`
    }
  }
}

module.exports = Chef;
