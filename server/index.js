const express = require('express');
const cors = require('cors');
const path = require('path');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample headlines for regeneration
const seoHeadlines = [
  "Why {name} is {location}'s Sweetest Spot in 2025",
  "Discover Why {name} is the Top-Rated Business in {location}",
  "How {name} Became {location}'s Most Beloved Destination",
  "{location}'s Hidden Gem: {name} Reveals Their Success Secret",
  "The Ultimate Guide to {name}: {location}'s 5-Star Experience",
  "Why Customers Can't Stop Talking About {name} in {location}",
  "{name}: Redefining Excellence in {location} Since 2023",
  "The {name} Experience: What Makes It {location}'s Favorite",
  "Inside {location}'s Highest-Rated Business: {name}'s Journey to Success",
  "How {name} is Transforming the Business Landscape in {location}"
];

// Generate a random headline based on business name and location
const generateHeadline = (name, location) => {
  const randomIndex = Math.floor(Math.random() * seoHeadlines.length);
  return seoHeadlines[randomIndex]
    .replace(/{name}/g, name)
    .replace(/{location}/g, location);
};

// Generate random rating between 3.5 and 5.0
const generateRating = () => {
  return (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1);
};

// Generate random number of reviews between 50 and 500
const generateReviews = () => {
  return Math.floor(Math.random() * (500 - 50) + 50);
};

// POST endpoint for business data
app.post('/api/business-data', (req, res) => {
  const { name, location } = req.body;
  
  if (!name || !location) {
    return res.status(400).json({ error: 'Business name and location are required' });
  }
  
  const businessData = {
    rating: parseFloat(generateRating()),
    reviews: generateReviews(),
    headline: generateHeadline(name, location)
  };
  
  res.json(businessData);
});

// GET endpoint for regenerating headline
app.get('/api/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  
  if (!name || !location) {
    return res.status(400).json({ error: 'Business name and location are required' });
  }
  
  const newHeadline = generateHeadline(name, location);
  res.json({ headline: newHeadline });
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

// Set port for the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});