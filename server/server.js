const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ListingProduct = require('./models/ListingProduct');
const bodyParser = require('body-parser');
const User = require('./models/User');
const Contractor = require('./models/Contractor');
const Contract = require('./models/Contract');
const Chat = require('./models/chatSchema');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


// Connect to MongoDB
mongoose.connect('mongodb+srv://2022adityaraorane:2022adityaraorane@cluster0.n9fkd.mongodb.net/krushimitra', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Routes
app.post('/signup', async (req, res) => {
    const { firstName, lastName, dob, contact, address, state, email, password } = req.body;
  
    const newUser = new User({ firstName, lastName, dob, contact, address, state, email, password });
  
    try {
      await newUser.save();
      res.status(201).send('User registered successfully');
    } catch (error) {
      res.status(500).send('Error registering user');
    }
  });

// Store a new chat message
app.post('/send-message', async (req, res) => {
  try {
    const { senderEmail, receiverEmail, message } = req.body;
    const chatMessage = new Chat({ senderEmail, receiverEmail, message });
    await chatMessage.save();
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Retrieve chat messages between two users
app.get('/get-messages', async (req, res) => {
  try {
    const { senderEmail, receiverEmail } = req.query;
    const messages = await Chat.find({
      $or: [
        { senderEmail, receiverEmail },
        { senderEmail: receiverEmail, receiverEmail: senderEmail },
      ],
    }).sort({ timestamp: 1 });

    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

  app.get('/view-farmers', async (req, res) => {
    try {
      const farmers = await User.find({}); // Fetch all users (farmers) from the database
      res.status(200).json(farmers);
    } catch (error) {
      res.status(500).send('Error fetching farmers');
    }
  });
  
  
  app.post('/signup-contractor', async (req, res) => {
    const { name, dob, address, contact, email, password } = req.body;
  
    const newContractor = new Contractor({ name, dob, address, contact, email, password });
  
    try {
      await newContractor.save();
      res.status(201).send('Contractor registered successfully');
    } catch (error) {
      res.status(500).send('Error registering contractor');
    }
  });
  
  app.post('/login-farmer', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send('Invalid email or password');
      }
  
      if (password !== user.password) {
        return res.status(400).send('Invalid email or password');
      }
  
      res.status(200).send('Login successful');
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).send('Error logging in');
    }
  });

  app.post('/login-contractor', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const contractor = await Contractor.findOne({ email });
  
      if (!contractor || contractor.password !== password) {
        return res.status(400).send('Invalid email or password');
      }
  
      res.status(200).send('Login successful');
    } catch (error) {
      console.error('Error logging in contractor:', error);
      res.status(500).send('Error logging in');
    }
  });
  

  app.post('/list-product', async (req, res) => {
    const { email, category, produce, title, image1, quantity, quantityType, description, status, price } = req.body;
  
    const newProduct = new ListingProduct({ email, category, produce, title, image1, quantity, quantityType, description, status, price });
  
    try {
      await newProduct.save();
      res.status(201).send('Product listed successfully');
    } catch (error) {
      console.error('Error listing product:', error);
      res.status(500).send('Error listing product');
    }
  });
// server.js or your route file
app.get('/listed-products', async (req, res) => {
  try {
    const email = req.query.email;
    if (!email) {
      return res.status(400).json({ message: "Email query parameter is required" });
    }

    const products = await Product.find({ email: email });
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/view-contractors', async (req, res) => {
  try {
    const contractors = await Contractor.find({});
    res.json(contractors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contractors' });
  }
});

  app.get('/list-products', async (req, res) => {
    try {
      const products = await ListingProduct.find();
      res.status(200).json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).send('Error fetching products');
    }
  });

  app.get('/get-farmer-details', async (req, res) => {
    try {
      const userId = req.query.userId;
  
      // Validate userId
      if (!userId) {
        console.error('User ID is missing');
        return res.status(400).send('User ID is required');
      }
  
      // Fetch user from the database
      const user = await User.findById(userId);
      
      if (!user) {
        console.error('User not found:', userId);
        return res.status(404).send('User not found');
      }
  
      res.status(200).json({ email: user.email });
    } catch (error) {
      console.error('Error fetching farmer details:', error.message);
      res.status(500).send('Error fetching farmer details');
    }
  });
  
  app.get('/get-contracts', async (req, res) => {
    try {
      const buyerEmail = req.query.buyer;
      if (!buyerEmail) return res.status(400).send('Buyer email is required');
  
      const contracts = await Contract.find({ buyer: buyerEmail });
      res.status(200).json(contracts);
    } catch (error) {
      res.status(500).send('Error fetching contracts');
    }
  });

  app.post('/create-contract', async (req, res) => {
    try {
      const contract = new Contract(req.body);
      await contract.save();
      res.status(201).send(contract);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  app.get('/get-ccontracts', async (req, res) => {
    try {
      const contracts = await Contract.find({});
      res.status(200).send(contracts);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.get('/get-products', async (req, res) => {
  const email = req.query.email;

  try {
    const products = await Product.find({ email: email });
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

  
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});