// export const Sales = async () => {
//     const sales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=side").then (res => res.json()) //&_expand=vegetable

//     let salesDivs = sales.map(
//         (purchase) => {
//             const purchasePrice = (parseFloat(purchase.entreeId.price) + parseFloat(purchase.sideId.price)).toFixed(2) // + purchase.vegetable.price

//             return `<div>Receipt #${purchase.id} = $${purchasePrice}</div>`
//         }
//     )

//     //salesDivs = salesDivs.join("")

//     return salesDivs
// }

export const Sales = async () => {
    
    const sales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=side&_expand=vegetable")
        .then(res => res.json())

    let salesDivs = sales.map(purchase => {
        
        const entreePrice = purchase.entree ? parseFloat(purchase.entree.price) : 0
        const sidePrice = purchase.side ? parseFloat(purchase.side.price) : 0
        const veggiePrice = purchase.vegetable ? parseFloat(purchase.vegetable.price) : 0

       
        const purchasePrice = (entreePrice + sidePrice + veggiePrice).toFixed(2)

      
        return `<div>Receipt #${purchase.id} = $${purchasePrice}</div>`
    })

    

    return salesDivs;
}