const { model } = require('mongoose');
const Model = require('../Models/Model');

// destracturing the Models
const { categories, transactions } = Model;

//   post:http://localhost:3001/api/categories
const create_categories = async (req, res) => {

    const Create_Category = new categories({
        type: "Savings",
        color: "rgb(255,205,86)"
    })
    await Create_Category.save((err) => {
        if (!err) return res.json("Category Created");
        return res.status(400).json({ message: "Error While creating Categories" })
    })

}

//   get:http://localhost:3001/api/categories
const get_categories = async (req, res) => {

    // finding the all categories which are created
    const myCategories = await categories.find({});
    const filter = await myCategories.map(Item => Object.assign({}, { type: Item.type, color: Item.color }))
    res.json(filter);

}
//   post:http://localhost:3001/api/transaction
const create_transaction = async (req, res) => {
    const { name, type, amount } = req.body;

    //    passing the user data to transaction schema
    const myTransaction = await new transactions({
        name,
        amount,
        type,
        date: new Date()
    })

    // check error while creating transaction
    await myTransaction.save((err) => {
        if (!err) return res.json(myTransaction);
        return res.status(400).json({ message: `Error while creating transaction ${err}` })
    });
}

//   get:http://localhost:3001/api/transaction
const get_transaction = async (req, res) => {
    let AllTransaction = await transactions.find({});
    res.status(200).send(AllTransaction);
}

//   delete:http://localhost:3001/api/transaction
async function delete_Transaction(req, res) {
    if (!req.body) res.status(400).json({ message: "Request body not Found" });
    await transactions.deleteOne(req.body, function (err) {
        if (!err) res.json("Record Deleted...!");
    }).clone().catch(function (err) { res.json("Error while deleting Transaction Record") });
}
//   get:http://localhost:3001/api/labels
async function get_labels(req, res) {
    transactions.aggregate([
        {
            $lookup: {
                from: "categories",
                localField: "type",
                foreignField: "type",
                as: "categories_info"
            },
        },
        {
            $unwind: "$categories_info"
        }
    ]).then(result => {
        const data = result.map((keys) => Object.assign({}, {
            _id: keys._id,
            name: keys.name,
            type: keys.type,
            amount: keys.amount,
            color: keys.categories_info['color']
        }))
        res.json(data)
    }).catch(error => {
        res.status(400).json({ message: "Look up connection error" })
    })
}


module.exports = {
    create_categories,
    get_categories,
    create_transaction,
    get_transaction,
    delete_Transaction,
    get_labels
}