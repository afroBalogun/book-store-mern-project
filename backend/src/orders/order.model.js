const mongoose = require('mongoose')
const { Schema } = mongoose

const orderSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipcode: {
            type: Number,
            required: true
        }
    },
    phone:{
        type: Number,
        required: true
    },
    productIds: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Book'
        }
    ],
    sumPrice : {
        type: Number,
        required: true
    }, 
},
{
    timestamps: true,
}
);

const Order = mongoose.model('Order', orderSchema)

module.exports = Order;