function fruit(somefruit, grams, price){
    let kg = grams / 1000;
    let pricekg = price * kg;
    console.log(`I need $${pricekg.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${somefruit}.`)
}


fruit('orange', 6500, 2.80)