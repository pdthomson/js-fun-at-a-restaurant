function takeOrder(order, orderArray){
 if(orderArray.length === 3){
  return orderArray;
 } else {
  return orderArray.push(order)}
}

function refundOrder(orderNum, orderArray) {
  for (var i = 0; i < orderArray.length; i++) {
    if (orderArray[i].orderNumber === orderNum) {
      orderArray.splice(i, 1);
    }
  }
}

function listItems(orderArray) {
  var itemArray = []
  for (var i = 0; i < orderArray.length; i++) {
    itemArray.push(orderArray[i].item)};
    return itemArray.join(', ');
  }

  function searchOrder(orderArray, foodName) {
    for (var i = 0; i < orderArray.length; i++) {
      if(orderArray[i].item === foodName)
      {
      return true;
    }
    };
      return false;
      
  }

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}