const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

let parts = [
  { id: 1, name: 'Brake Pad', price: 29.99, category: 'brakes' },
  { id: 2, name: 'Oil Filter', price: 9.99, category: 'filters' },
];

app.get('/api/parts', (req, res) => {
  res.json(parts);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});