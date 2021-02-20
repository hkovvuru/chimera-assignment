import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderedItemsSchema = mongoose.Schema({
    id : Number,
    device : String,
    os : String,
    manufacturer : String,
    lastCheckedOutDate: Date,
    lastCheckedOutBy: String,
    isCheckedOut: Boolean
})

const OrderedItems = mongoose.model('OrderedItems', orderedItemsSchema);

export default OrderedItems;