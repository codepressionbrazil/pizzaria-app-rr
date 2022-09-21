document.getElementById("btn-confirm").addEventListener("click", makeOrder)

function getValueFromDucument(id, isChecked = false){
    if(isChecked)
        return document.getElementById(id).checked

    return document.getElementById(id).value
}

function makeOrder(){
    const person = getValueFromDucument("name")
    const email = getValueFromDucument("email")
    const phone = getValueFromDucument("phone")

    const street = getValueFromDucument("street")
    const district = getValueFromDucument("district")
    const number = getValueFromDucument("number")
    const description = getValueFromDucument("description")

    const size = getValueFromDucument("size")

    // const flavors = getValueFromDucument("flavors")
    const borderFlavor = getValueFromDucument("border-flavor")

    const guarana = getValueFromDucument("guarana", true)
    const coca = getValueFromDucument("coca-cola", true)

    const order = {
        person,
        email,
        phone,
        address: {
            street,
            district,
            number,
            description
        },
        size,
        borderFlavor,
        drinks: {
            guarana,
            coca,
        }
    }

    localStorage.setItem("order", JSON.stringify(order))
}