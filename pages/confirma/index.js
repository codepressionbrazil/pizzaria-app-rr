const order = JSON.parse(localStorage.getItem("order"));
let totalPrice = 0;

order["flavors"] = [
    {name: "Saborzin1"}, {name: "Sabor2"}
]

const getPizzaSize = (sizeChar) => {
    switch(sizeChar){
        case "S": totalPrice += 20; return "Pequena (2 sabores)";
        case "M": totalPrice += 30; return "Média (3 sabores)";
        case "L": totalPrice += 40; return "Grande (4 sabores)";
        case "F": totalPrice += 50; return "Família (5 sabores)";
    }
}

const getOrderFlavors = (flavors) => {
    let flavorsString = "";
    for(let f of flavors){
        flavorsString += f.name + ",\n";
    }
    return flavorsString;
}


const getOrderDrinks = (drinks) => {
    let drinksString = "";
    if(drinks.guarana && drinks.coca){
        totalPrice += 8;
        drinksString = "Guaraná e Coca-Cola"
    } else
    if(drinks.coca){
        totalPrice += 4;
        drinksString = "Coca-Cola 2L"
    } else 
    if(drinks.guarana){
        totalPrice += 4;
        drinksString = "Guaraná 2L"
    }
    if(!(drinks.guarana && drinks.coca)){
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
    addressInput.value =order.address.district + ", " + order.address.street + ", " + order.address.number;
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




