import { setSide } from "./TransientState.js"

const handleSideChange = (changeEvent) => {
    if (changeEvent.target.name === "side") {
        setSide(parseInt(changeEvent.target.value))
    }
}



export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const side = await response.json()

    document.addEventListener("change", handleSideChange)

    let sideOptionsHTML = ""

    const divStringArray = side.map(
        (side) => {
            return `<div>
                <input type='radio' name='side' value='${side.id}' /> ${side.title}
            </div>`
    }
)
    sideOptionsHTML += divStringArray.join("")
    
    return sideOptionsHTML
}