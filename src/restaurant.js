function createRestaurant(restaurantName) {
  restaurantObject = {
    name: restaurantName,
    menus: 
    {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }

  return restaurantObject
}

function addMenuItem(restaurant, menuItem) {
  if(restaurant.menus[menuItem.type].includes(menuItem) === false){
    return (restaurant.menus[menuItem.type].push(menuItem));
  }
}

function removeMenuItem(restaurant, food, menuType) {
  for (var i = 0; i < restaurant.menus[menuType].length; i++) { 
    if (food === restaurant.menus[menuType][i].name)
      restaurant.menus[menuType].splice(i, 1);
      return `No one is eating our ${food} - it has been removed from the ${menuType} menu!`
    } 
    { 
      return `Sorry, we don't sell ${food}, try adding a new recipe!`
  }
}


module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}