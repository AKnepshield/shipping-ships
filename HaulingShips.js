import { getHaulers } from "./database.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const haulerTarget = clickEvent.target
        
        if (haulerTarget.dataset.type === "haulers") {

// type of item clicked
// id value of hauler item that was clicked
// array of shipping ships so it can be iterated

// Was a hauler list item clicked?

// Get the id of the hauler clicked

// Start a counter variable at 0

// Iterate all of the shipping ships

// Does the haulerId foreign key match the id?

// Increase the counter by 1
        }
    }
)

export const HaulersList = () => {
    const haulers = getHaulers()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        // Convert each dock object to an <li> and append to the docksHTML string
        hauler.HTML += `<li data-id="${hauler.id}"
                            data-type="haulers"

                        // data-name="${hauler.name}"
                        // data-dockId="${hauler.dockId}">
                           </li>`
        }

    haulersHTML += "</ul>"
    return haulersHTML

}