import { DockList } from "./DockList.js"
import { HaulersList } from "./HaulerList.js"
import { ShippingShipList } from "./ShippingShipList.js"

const mainContainer = document.querySelector("#container")

const mainHTML = `
    <h1>Shipping Ships</h1>
    <article class="details">
        <section class="docks">
            <h2>Docks</h2>
            ${DockList()}
        </section>
        <section class="haulers">
            <h2>Haulers</h2>
            ${HaulersList()}
        </section>
        <sections class="Shippers">
            <h2>Shippers</h2>
            ${ShippingShipList()}
        </section>

`

mainContainer.innerHTML = mainHTML