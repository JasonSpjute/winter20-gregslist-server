import mongoose from "mongoose";
const Schema = mongoose.Schema

const House = new Schema(
    {
        bedrooms: {type: Number, required: true},
        bathrooms: {type: Number, required: true},
        levels: {type: Number, required: true},
        imgUrl: {type: String, default: "https://13thhour.com/wp-content/uploads/haunted_hous1.jpg"},
        year: {type: Number, required: true},
        price: {type: Number, required: true},
        description: {type: String}
    }
)

export default House