// Set up the transient state data structure and provide initial values
const transientState = {
    "entreeId": 0, 
    "vegetableId": 0, 
    "sideId": 0
}

// Functions to modify each property of transient state
export const setEntree = (chosenEntree) => {
    transientState.entreeId = chosenEntree
    console.log(transientState)
}

export const setVeggie = (chosenVeggie) => {
    transientState.vegetableId = chosenVeggie
    console.log(transientState)
}

export const setSide = (chosenSide) => {
    transientState.sideId = chosenSide
    console.log(transientState)
}


// Function to convert transient state to permanent state
export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/purchases", postOptions)

const customEvent = new CustomEvent("newOrderCreated")
document.dispatchEvent(customEvent)
}

