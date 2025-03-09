const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

require('dotenv').config();

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', "https://book-store-mern-project-mny8.onrender.com/"],
    credentials: true
}));

// Routes
const bookRoutes = require('./src/books/book.route');
app.use("/api/books", bookRoutes);

const orderRoutes = require('./src/orders/order.route');
app.use("/api/orders", orderRoutes);

const userRoutes = require('./src/users/user.route');
app.use("/api/auth", userRoutes);

const adminRoutes = require('./src/stats/admin.stats');
app.use("/api/admin", adminRoutes);

async function main() {
    try {
        await mongoose.connect(process.env.DB_URL || 'your-default-db-url');
        console.log("MongoDB successfully connected!");

        // Start the server after DB connection is established
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1); // Exit if DB connection fails
    }
}

main();

// Default route
app.get('/', (req, res) => {
    res.send('Hello there!');
});
 