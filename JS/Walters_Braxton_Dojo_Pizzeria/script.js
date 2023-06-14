function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

const crustArr = ["Thin Crust", "Deep Dish", "hand tossed", "Stuffed crust"];
const sauceArr = ["Red sauce", "BBQ Sauce", "Alfredo Sauce", "Spicy Red Sauce"];
const cheeseArr = ["Mozzarella", "Provolone", "Cheddar", "Parmesan"];
const topArr = ["Pepperoni", "Mushroom", "Italian sausage", "Onion"];

function ranPizza() {
    let ranCrust = crustArr[Math.floor(Math.random() * crustArr.length)];
    let ranSauce = sauceArr[Math.floor(Math.random() * sauceArr.length)];
    let ranCheese = cheeseArr[Math.floor(Math.random() * cheeseArr.length)];
    let ranTop = topArr[Math.floor(Math.random() * topArr.length)];
    return pizzaOven(ranCrust, ranSauce, ranCheese, ranTop);

}

const pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
const pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
const myPizza2 = pizzaOven("Deep Dish", "Red sauce", "Mozzarella", ["Italian sausage", "pepperoni"]);
const myPizza1 = pizzaOven("Thin crust", "Red sauce", "Mozzarella", ["Italian sausage", "pepperoni"]);
const myRanPizza = ranPizza();

// console.log(pizza1);
// console.log(pizza2);
// console.log(myPizza1);
// console.log(myPizza2);
console.log(myRanPizza);


