const order = JSON.parse(localStorage.getItem("order"));
let totalPrice = 0;

const addIntoTotalPrice = (price) => {
    totalPrice += price;
}

const getPizzaSize = (sizeChar) => {
    switch(sizeChar){
        case "S": addIntoTotalPrice(40); return "Pequena (2 sabores)";
        case "M": addIntoTotalPrice(50); return "Média (3 sabores)";
        case "L": addIntoTotalPrice(60); return "Grande (4 sabores)";
        case "F": addIntoTotalPrice(70); return "Família (5 sabores)";
    }
}

const getOrderFlavors = (flavors) => {
    let flavorsString = "";
    for(let f of flavors){
        flavorsString += (f + ", ");
    }
    
    const formatedFlavors = flavorsString.split("");
    formatedFlavors.pop();
    formatedFlavors.pop();


    return formatedFlavors.join("");
}


const getOrderDrinks = (drinks) => {
    let drinksString = "";
    if(drinks.guarana && drinks.coca){
        addIntoTotalPrice(8);
        drinksString = "Guaraná e Coca-Cola"
    } else
    if(drinks.coca){
        addIntoTotalPrice(4);
        drinksString = "Coca-Cola Lata"
    } else 
    if(drinks.guarana){
        addIntoTotalPrice(4);
        drinksString = "Guaraná Lata"
    }
    if(!drinks.guarana && !drinks.coca){
        drinksString = "Sem bebida";
    }

    return drinksString
}

const getPizzaBorder = (border) => {
    if(border.value == "no-border"){
        return border.name;
    }

    addIntoTotalPrice(10);

    return border[0].toUpperCase() + border.slice(1);
};

const getDeliveryType = (delivery) => {
    if(delivery){
        addIntoTotalPrice(10);
        return "Entrega";
    }
    return "Retirada balcão";
}

if(order){
    const nameInput = document.querySelector(".client-name");
    const addressInput = document.querySelector(".client-address");
    const phoneInput = document.querySelector(".client-phone");
    const pizzaSize = document.querySelector(".order-pizza");
    const pizzaBorder = document.querySelector(".order-pizza-border");
    const orderFlavors = document.querySelector(".order-flavors");
    const orderDrinks = document.querySelector(".order-drinks");
    const totalPriceLabel = document.querySelector(".order-total-price");
    const orderDelivery = document.querySelector(".order-delivery");

    nameInput.value = order.person;
    addressInput.value = order.address.district + ", " + order.address.street + ", " + order.address.number;
    phoneInput.value = order.phone;
    pizzaSize.textContent = getPizzaSize(order.size);
    pizzaBorder.textContent = getPizzaBorder(order.borderFlavor);
    orderFlavors.textContent = getOrderFlavors(order.flavors);
    orderDrinks.textContent = getOrderDrinks(order.drinks);
    orderDelivery.textContent = getDeliveryType(order.delivery);
    totalPriceLabel.textContent = "R$ " + totalPrice;
} else {
    const feedbackTxt = document.querySelector(".confira-seus-dados");
    feedbackTxt.textContent = "Após fazer seu pedido, ele irá aparecer por aqui.";   
}

const confirmOrder = () => {
    alert("Pedido confirmado");
}




