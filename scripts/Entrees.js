import { setEntree } from "./TransientState.js"

const handleEntreeChange = (changeEvent) => {
    if (changeEvent.target.name === "entree") {
        setEntree(parseInt(changeEvent.target.value))
    }
}


export const EntreeOptions = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entree = await response.json()

    document.addEventListener("change", handleEntreeChange)

   

    let entreeOptionsHTML = ""
    const divStringArray = entree.map(
        (entree) => {
            return `<div>
                <input type='radio' name='entree' value='${entree.id}' /> ${entree.name}
            </div>`
        }
    )

    entreeOptionsHTML +=  divStringArray.join("")
    
    return entreeOptionsHTML
    

 }
