function takeOrder(order, listOfOrders) {
  if (listOfOrders.length < 3){
    listOfOrders.push(order)
  }
}

function refundOrder(numberToRemove, listOfOrders) {
  for (i = 0; i<listOfOrders.length; i++){
    if (listOfOrders[i].orderNumber === numberToRemove){
      listOfOrders.splice(i, 1)
    }
  }
}

function listItems(listOfOrders) {
  var itemList = ""
  for (i=0; i<listOfOrders.length; i++){
    itemList += listOfOrders[i].item
    if (listOfOrders[i+1]){
      itemList += ", "
    }
  }
  return itemList
}

function searchOrder(listOfOrders, item) {
  for (i=0; i < listOfOrders.length; i++){
    if (listOfOrders[i].item === item) {
      return true
    }
  }
  return false
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
