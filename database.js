// Create function to export copy of docks array

const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Pioneering Spirit", dockId: 3 },
        { id: 2, name: "Boaty McBoatface", dockId: 1 },
        { id: 3, name: "Seawise Giant", dockId:  1},
        { id: 4, name: "Krakdown", dockId: 4 },
        { id: 5, name: "USS NSS", dockId: 2 },
        { id: 6, name: "Icebreaker", dockId: 4 }
    ],
    shippingShips: [
        { id: 1, name: "Esso Atlantic", haulerId: 2 },
        { id: 2, name: "Prairial", haulerId: 1 },
        { id: 3, name: "Palais Royal", haulerId: 4 },
        { id: 4, name: "Rivoli", haulerId: 1 },
        { id: 5, name: "Champs Elysee", haulerId: 3 },
        { id: 6, name: "Ever Ace", haulerId: 2 },
        { id: 7, name: "Nissei Maru", haulerId: 4 },
        { id: 8, name: "MSC Gulsun", haulerId: 2 },
        { id: 9, name: "HMM Rotterdam", haulerId: 3 },
        { id: 10, name: "CMA CHM Tocadero", haulerId: 1 }

    ]
}

// You write the code for copying the array and returning it
export const getDocks = () => structuredClone(database.docks)
export const getHaulers = () => structuredClone(database.haulers)
export const getShippingShips = () => structuredClone(database.shippingShips)