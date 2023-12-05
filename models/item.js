const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const itemSchema = Schema({
    name: { type: String, require: [true, 'Item must have a Name'] },
    description: { type: String, require: [true, 'Item must have a Description'] },
    image: { type: String },
    current_price: { type: Number, required: true },
    auction: { type: Schema.Types.ObjectId, ref: 'auctions' },
    status: { type: Boolean, require: true, default: true }
});

module.exports = mongoose.model('Item', itemSchema);