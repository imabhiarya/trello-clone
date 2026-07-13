import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    title: {
        type : String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true,
        default: ''
    },
    listId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List',
        required: true
    },
    position: {
        type: Number,
        required: true,
    }
}, {timestamps: true});

const Card = mongoose.model('Card', cardSchema);
export default Card;