import { placeOrder } from "./TransientState.js"

const handleOrderButtonClick = (clickEvent) => {
    if (clickEvent.target.id === "placeOrderBtn") {
        placeOrder()
        
    }
}

export const SaveSubmission = () => {

    document.addEventListener("click", handleOrderButtonClick)

    return "<div><button id='placeOrderBtn'>Purchase Combo</button></div> "
    
}