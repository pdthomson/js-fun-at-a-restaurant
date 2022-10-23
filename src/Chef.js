class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(customerName, timeOfDay) {
    if(timeOfDay === true) {
      return `Good morning, ${customerName}!`
      } else {
      return `Hello, ${customerName}!`
      }
    }
  
  checkForFood(foodItem) {
    if(this.restaurant.menus[foodItem.type].includes(foodItem)){
      return `Yes, we're serving ${foodItem.name} today!`
    } else {
       return `Sorry, we aren't serving ${foodItem.name} today.`
    }
  }
}
module.exports = Chef;