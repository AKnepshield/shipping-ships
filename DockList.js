// Create list of available docks
// getDocks function retreives copy of array of docks objects
// Build HTML list of docks
import { getDocks, getHaulers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const  itemClicked = clickEvent.target  //targeting item clicked
        // if clicked on a dock
        if (itemClicked.dataset.type === "dock") {
            const dockId = parseInt(itemClicked.dataset.id)
            // Create empty array
            const haulerDocks = []
            // Access objects of getHaulers array
            const allHaulers = getHaulers()
            // Iterate through allHaulers
            for (const hauler of allHaulers) {
            // If the dockId of hauler is equal to dock.id
                if ( hauler.dockId === dockId ) {
                    haulerDocks.push( hauler.name )
                }
            }
                
                const allDocks = getDocks()
                for ( const dock of allDocks ) {
                    if ( dockId === dock.id ) {

                        if ( haulerDocks.length === 1) { 
                            window.alert(`The ${dock.location} dock is currently unloading ${haulerDocks.join("")}`)
                        }
                        else if ( haulerDocks.length === 0) {
                            window.alert(`The ${dock.location} dock is currently unloading nothing`)
                        }
                        else if ( haulerDocks.length >= 2 ) {
                            window.alert(`The ${dock.location} dock is currently unloading ${haulerDocks.join(", ")}`)
                        }
                    }
                }   
            }        
    }
)
    // make an empty array of haulers
    // iterate through haulers
    // find hauler that corresponds with dock id
    // if dock location = hauler id window alert
    // if dock location = 0 window alert
    // if dock location = multip haulers window alert
    // window alert which hauler is being service by dock
    


export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li  data-type="dock"
                           data-id="${dock.id}"
                           data-location="${dock.location}"
                           data-volume="${dock.volume}">
                           ${dock.location}
                           </li>`
        }
    
    docksHTML += "</ul>"

    return docksHTML
    }