import mongoose from 'mongoose';
const { Schema } = mongoose;

const mobileSchema = mongoose.Schema({
    id : Number,
    device : String,
    os : String,
    manufacturer : String,
    lastCheckedOutDate: Date,
    lastCheckedOutBy: String,
    isCheckedOut: Boolean
})

const MobileInfo = mongoose.model('MobileInfo', mobileSchema);

export default MobileInfo;