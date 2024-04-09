import mongoose from 'mongoose';
const Schema = mongoose.Schema



const scoreSchema = new Schema({
    name: { type: String, default: 'Roger' },
    wrong: { type: Number, default: 0 },
    time: { type: Number, default: 0 },

}, {
    timestamps: true
});


module.exports = mongoose.model('Score', scoreSchema)