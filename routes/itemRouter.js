const express = require('express')
const inventoryRouter = express.Router()
const {v4: uuid4} = require("uuid")

const items = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuid4()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuid4()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuid4()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuid4()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuid4()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuid4()
    },{
        name: "flour",
        type: "food",
        price: 100,
      _id: uuid4()
    }
]

//ROUTES
// inventoryRouter.route("/")
//     .get((req, res) => {
//         res.send(items)
//     })
//     .post((req, res) => {
//         const newItem = req.body
//         newItem._id = uuid4()
//         console.log(newItem)
//         items.push(newItem)
//         res.send(`Successfully added ${newItem.age} to the database!`)
//     })

//GET ALL

inventoryRouter.get("/", (req, res) => {
    res.send(items)
})

//GET ONE

inventoryRouter.get("/:itemId", (req, res) => {
    const itemId = req.params.itemId
    const foundItem = items.find(item => item._id === itemId)
    res.send(foundItem)
})

//GET BY NAME

inventoryRouter.get("/search/name", (req, res) => {
    const name = req.query.name
    const filteredItems = items.filter(item => item.name === name)
    res.send(filteredItems)
})

//GET BY TYPE

inventoryRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredItems = items.filter(item => item.type === type)
    res.send(filteredItems)
})

//GET BY PRICE

inventoryRouter.get("/search/price", (req, res) => {
    const price = req.query.price.toString()
    const filteredItems = items.filter(item => item.price.toString() === price)
    res.send(filteredItems)
})

//POST

inventoryRouter.post((req, res) => {
    const newItem = req.body
    newItem._id = uuid4()
    console.log(newItem)
    items.push(newItem)
    res.send(`Successfully added ${newItem.name} to the database!`)
})

//PUT



//DELETE

module.exports = inventoryRouter