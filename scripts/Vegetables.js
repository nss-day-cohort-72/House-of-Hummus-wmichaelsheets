import { setVeggie } from "./TransientState.js"

const handleVeggieChange = (changeEvent) => {
    if (changeEvent.target.name === "veggie") {
        setVeggie(parseInt(changeEvent.target.value))
    }
}



export const Veggies = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const veggie = await response.json()

    document.addEventListener("change", handleVeggieChange)

    let veggieOptionsHTML = ""

    const divStringArray = veggie.map(
        (veggie) => {
            return `<div>
                <input type='radio' name='veggie' value='${veggie.id}' /> ${veggie.type}
            </div>`
    }
)
  veggieOptionsHTML += divStringArray.join("")
    
    return veggieOptionsHTML
}