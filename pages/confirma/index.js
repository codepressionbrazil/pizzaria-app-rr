const order = JSON.parse(localStorage.getItem("order"));
let totalPrice = 0;

const addIntoTotalPrice = (price) => {
    totalPrice += price;
}

const getPizzaSize = (sizeChar) => {
    switch(sizeChar){
        case "S": addIntoTotalPrice(20); return "Pequena (2 sabores)";
        case "M": addIntoTotalPrice(30); return "Média (3 sabores)";
        case "L": addIntoTotalPrice(40); return "Grande (4 sabores)";
        case "F": addIntoTotalPrice(50); return "Família (5 sabores)";
    }
}

const getOrderFlavors = (flavors) => {
    let flavorsString = "";
    for(let f of flavors){
        flavorsString += f + ", ";
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
    } else {
        totalPrice += 3;
        return border.name;
    }
};

const getDeliveryType = (delivery) => {
    if(delivery){
        totalPrice += 5;
        return "Entrega";
    }
    return "Retirada balcão";
}

if(order){
    console.log(order);
    const nameInput = document.querySelector(".client-name");
    const addressInput = document.querySelector(".client-address");
    const phoneInput = document.querySelector(".client-phone");
    const pizzaSizeP = document.querySelector(".order-pizza");
    const pizzaBorderP = document.querySelector(".order-pizza-border");
    const orderFlavorsP = document.querySelector(".order-flavors");
    const orderDrinksP = document.querySelector(".order-drinks");
    const totalPriceP = document.querySelector(".order-total-price");
    const orderDelivery = document.querySelector(".order-delivery");

    nameInput.value = order.person;
    addressInput.value = order.address.district + ", " + order.address.street + ", " + order.address.number;
    phoneInput.value = order.phone;
    pizzaSizeP.textContent = getPizzaSize(order.size);
    pizzaBorderP.textContent = getPizzaBorder(order.borderFlavor);
    orderFlavorsP.textContent = getOrderFlavors(order.flavors);
    orderDrinksP.textContent = getOrderDrinks(order.drinks);
    orderDelivery.textContent = getDeliveryType(order.delivery);
    totalPriceP.textContent = "R$ "+totalPrice;
} else {
    const feedbackTxt = document.querySelector(".confira-seus-dados");
    feedbackTxt.textContent = "Após fazer seu pedido, ele irá aparecer por aqui.";   
}

const confirmOrder = () => {
    alert("Pedido confirmado");
}




