import { getShippingShips, getHaulers } from "./database.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const shipperTarget = clickEvent.target
        
        // Was a shipping ship list item clicked?
        if (shipperTarget.dataset.type === "shippers") {

            // Get the haulerId value of the shipping ship clicked
            const haulerId = shipperTarget.dataset.haulerid
            let haulingShip = { name: "Incorrect" }

            // Define a default object for the found hauler
            const haulers = getHaulers()
                for ( const hauler of haulers ) {
                    if (parseInt(haulerId) === hauler.id) {
                        haulingShip = hauler
                    }
                }
                window.alert(`${shipperTarget.dataset.name} is being hauled by ${haulingShip.name}`)
                

        }



            // Iterate the array of hauler objects

                // Does the haulerId foreign key match the id of the current hauler?

                    // Reassign the value of `haulingShip` to the current hauler

            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
    }
)

export const ShippingShipList = () => {
    const shippingShips = getShippingShips()

    let shippersHTML = "<ul>"

    for (const shippingShip of shippingShips) {
        // Convert each dock object to an <li> and append to the docksHTML string
        shippersHTML += `<li data-type="shippers"
                           data-id="${shippingShip.id}"
                           data-name="${shippingShip.name}"
                           data-haulerId="${shippingShip.haulerId}">
                           ${shippingShip.name}
                           </li>`
        }

    shippersHTML += "</ul>"
    return shippersHTML

}