
class Hamburger {
  constructor(size, price, calories, stuffing) { 
    let bigBurger = {
      size: 'big',
      price: 100 ,
      calories: 40 ,
      stuffing: []
    }
  }
    addTopping(topping) {

    }
    removeTopping(topping) { }
    getToppings(topping) { }
    getSize() { }
    getStuffing() { }
    calculatePrice() { }
    calculateCalories() { }
}
let smallBurgers = new Hamburger('small', 50, 20, [])


class Topping{
  constructor(name, price, calories) {
    this.name = 'name',
    this.price = price,
    this.calories = calories
  }
}
const cheese = new.Stuffing('cheese', 10, 20)
const salad = new.Stuffing('salad', 20, 5)
const potatoes = new.Stuffing('potatoes', 15, 10)
const flavouring = new.Stuffing('flavouring', 15, 0)
const mayon = new.Stuffing('mayon', 20, 5)


const init = () => {

  }
  
  window.onload = init
  