import { EntreeOptions } from "./Entrees.js"
import { Sides } from "./SideDishes.js"
import { Veggies } from "./Vegetables.js"
import { Sales } from "./Sales.js"
import { SaveSubmission } from "./OrderButton.js"

export const FoodTruck = async () => {
    
    const salesHTML = await Sales()
    const entreeHTML = await EntreeOptions()
    const sidesHTML = await Sides()
    const veggiesHTML = await Veggies()
    const buttonHTML = SaveSubmission()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
    
    <article class="cards">
        <article class="customerOrders">
            <h2>Entrees</h2>
            ${entreeHTML}
        </article>

        <article class="customerOrders">
            <h2>Sides</h2>
            ${sidesHTML}
        </article>

        <article class="customerOrders">
            <h2>Vegetables</h2>
            ${veggiesHTML}
        </article>
    </article>

        <article class="button">
            ${buttonHTML}
        </article>

        <article class="monthly-sales">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
    

}
