const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/api/quiz', async (req, res) => {
  try {
    const response = await axios.get('https://api.jsonserve.com/Uw5CrX');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching quiz data');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
