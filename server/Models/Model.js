const mongoose = require('mongoose');

const schema = mongoose.Schema;

// Model for the Category 
const category_Schema = schema({
     type: { type: String, default: "Investment" },
     color: { type: String, default: "#FCBE44" }
})

// Model for the transaction
const transaction_Schema = schema({
     name: { type: String, default: "Anonymous" },
     amount: { type: Number, default: 0 },
     type: { type: String, default: "Investment" },
     date: { type: Date, default: Date.now() }
})

const categories = mongoose.model('category', category_Schema);
const transactions = mongoose.model('transaction', transaction_Schema);

exports.default = transactions;
module.exports = {
     categories,
     transactions
}

