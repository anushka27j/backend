const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  'mongodb+srv://anushkaj0987:gifthamper2728@cluster1.tudlfsg.mongodb.net/gifthamperDB?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => {
  console.log('✅ MongoDB connected');
  // Routes
  app.use('/api/auth', require('./routes/auth'));

  app.listen(5000, () => console.log('Server running on port 5000'));
})
.catch(err => console.log('MongoDB error:', err));
