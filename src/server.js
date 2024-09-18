const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const { readDb, writeDb } = require('./dbUtils.js');

const router = express();
router.use(bodyParser.json());
router.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL if different
}));

const JWT_SECRET = 'cSY&g<X:HqS:JhC'; // Use a strong secret key in production

const generateToken = (username) => {
  return jwt.sign({ username }, secretKey, { expiresIn: '1h' });
};

router.post('/register', (req, res) => {
  const { username, password } = req.body;

  try {
    const users = readDb('registration.json');

    // Check if the user already exists
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password and create the user
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = { username, password: hashedPassword };
    users.push(newUser);
    writeDb(users, 'registration.json');

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  try {
    const users = readDb('registration.json');

    // Find the user by username
    const user = users.find(user => user.username === username);

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate a token (if using JWT)
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });

    // Send the token to the client
    res.json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

router.get('/profile', (req, res) => {
  const username = req.query.username; // Assume the username is sent as a query parameter

  try {
    const profiles = readDb('volunteer.json');
    const userProfile = profiles.find(profile => profile.username === username);

    if (!userProfile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    const totalAmount = userProfile.entries.reduce((sum, entry) => sum + entry.amount, 0);

    res.json({ entries: userProfile.entries, totalAmount }); // Return all entries for the user
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
router.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});