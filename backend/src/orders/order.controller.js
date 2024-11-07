const Order = require("./order.model");

const createAnOrder = async (req, res) => {
    try {
        const newOrder = new Order(req.body);  // Use 'new' to initialize a Mongoose model

        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);

    } catch (error) {
        console.error("Error creating the order:", error);
        res.status(500).json({ message: "Error creating the order", error });
    }
};

const getOrderByEmail = async (req, res) => {
    try {
        const { email } = req.params;  
        const orders = await Order.find({ email }).sort({ createdAt: -1 });
        
        if (!orders ) {
            return res.status(404).json({ message: "No orders found for this email" });
        }
        
        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching the order:", error);
        res.status(500).json({ message: "Failed to fetch orders", error });
    }
}; 


module.exports = {
    createAnOrder, getOrderByEmail
};
