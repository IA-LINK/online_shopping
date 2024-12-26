const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan'); 
const routes = require('./routes'); // Import all routes
const config = require('./config/database'); 
const errorMiddleware = require('./middleware/errorMiddleware');

// express files
const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev')); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(config.mongoURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Mount routes
app.use('/api', routes); // Mount all routes under /api

// Error handling
app.use(errorMiddleware);

// Start server: 
const port = process.env.PORT || 5000; 
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
