function getValueFromDucument(id, isChecked = false) {
  if (isChecked) return document.getElementById(id).checked;

  return document.getElementById(id).value;
}

const flavors = [
  {
	name: "Selecione",
	value: "",
  },
  {
	name: "Strogonoff de Frango",
	value: "chickenStrognoff",
  },
  {
	name: "Calabresa",
	value: "calabress",
  },
  {
	name: "Portuguesa",
	value: "portuguesa",
  },
  {
	name: "Marguerita",
	value: "margerita",
  },
  {
	name: "Quatro queijos",
	value: "fourCheeses",
  },
  {
	name: "Frango com Catupiry",
	value: "chikenCatupity",
  },
  {
	name: "Mexicana",
	value: "mexican",
  },
  {
	name: "Coração",
	value: "hearth",
  },
  {
	name: "Sensação",
	value: "sensation",
  },
  {
	name: "Dois Amores",
	value: "twoLoves",
  },
  {
	name: "Banana Nevada",
	value: "white-banana",
  },
  {
	name: "Prestigio",
	value: "prestigio",
  },
  {
	name: "Confete",
	value: "confete",
  },
];

document.getElementById("btn-confirm").addEventListener("click", makeOrder);

document
  .getElementById("size")
  .addEventListener("change", createFlavorsOptions);

function createFlavorsOptions() {

	while(true){
		const hasFlavors = document.getElementById("pizzaFlavors")
		if(!!hasFlavors){
			document.getElementById("pizzaFlavors").remove()
		}
		if(!hasFlavors) break
	}

  const pizzaSize = getValueFromDucument("size")

  let numberOfFlavors;

  switch(pizzaSize){
	case "S": {
		numberOfFlavors = 2
		break
	}
	case "M": {
		numberOfFlavors = 3
		break
	}
	case "L": {
		numberOfFlavors = 4
		break
	}
	case "F": {
		numberOfFlavors = 5
		break
	}
	default: {
		document.getElementById("flavors-label-title").style.display = "none"
		return
	}
  }

  
  document.getElementById("flavors-label-title").style.display = "flex"
  for(let i = 0; numberOfFlavors > i; i++){
	const flavorsLabel = document.getElementById("flavors");
	const flavorDiv = document.createElement("div");

	flavorDiv.id = "pizzaFlavors"

	const flavorSelectElement = document.createElement("select");
	flavors.forEach((flavor) => {
		const option = new Option(flavor.name, flavor.value);
		flavorSelectElement.add(option);
	});

	const flavorTitle = document.createElement("h5");
	flavorTitle.innerText = `Sabor ${i + 1}`;
	flavorDiv.appendChild(flavorTitle);
	flavorDiv.appendChild(flavorSelectElement);
	flavorDiv.style.display = "flex";
	flavorsLabel.style.flexDirection = "column"
	flavorsLabel.appendChild(flavorDiv);
  }
}

function makeOrder() {
  const person = getValueFromDucument("name");
  const email = getValueFromDucument("email");
  const phone = getValueFromDucument("phone");

  const street = getValueFromDucument("street");
  const district = getValueFromDucument("district");
  const number = getValueFromDucument("number");
  const description = getValueFromDucument("description");

  const size = getValueFromDucument("size");

  // const flavors = getValueFromDucument("flavors")
  const borderFlavor = getValueFromDucument("border-flavor");

  const guarana = getValueFromDucument("guarana", true);
  const coca = getValueFromDucument("coca-cola", true);

  //arrumar isso aq
  const delivery = getValueFromDucument("delivery") === "delivery"

  const order = {
	person,
	email,
	phone,
	address: {
	  street,
	  district,
	  number,
	  description,
	},
	size,
	borderFlavor,
	drinks: {
	  guarana,
	  coca,
	},
	delivery: delivery
  };
  console.log(order)
  localStorage.setItem("order", JSON.stringify(order));
}
