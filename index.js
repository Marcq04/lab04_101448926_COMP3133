require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./route');
const app = express();

app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 8081;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error('Missing MONGO_URI environment variable');
    process.exit(1);
}

// Connect to MongoDB Atlas
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});