import { getHaulers, getShippingShips } from "./database.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const haulerTarget = clickEvent.target
        
        if (haulerTarget.dataset.type === "haulers") {
            const haulerId = haulerTarget.dataset.id 
            let shipCounter = 0                      

        const shippingShips = getShippingShips() 
        for (const ship of shippingShips) {
                if (ship.haulerId === parseInt(haulerId)) {
                    shipCounter += 1
                }
            }                                        
            window.alert(`The hauler is carrying ${shipCounter} shipping ships`)
        }
    }
)

export const HaulersList = () => {
    const haulers = getHaulers()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li data-type="haulers"
                            data-id="${hauler.id}"
                            data-name="${hauler.name}"
                            data-dockId="${hauler.dockId}">
                            ${hauler.name}
                        </li>`
        }

    haulersHTML += "</ul>"
    return haulersHTML

}