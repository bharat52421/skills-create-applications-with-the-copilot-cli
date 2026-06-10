const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { add, sub, mul, div, mod, power, squareRoot } = require('./calculator');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'web')));

app.post('/api/calc', (req, res) => {
  const { op, a, b } = req.body;
  try {
    let result;
    switch (op) {
      case 'add': result = add(a, b); break;
      case 'sub': result = sub(a, b); break;
      case 'mul': result = mul(a, b); break;
      case 'div': result = div(a, b); break;
      case 'mod': result = mod(a, b); break;
      case 'pow': result = power(a, b); break;
      case 'sqrt': result = squareRoot(a); break;
      default:
        return res.status(400).json({ error: `Unknown operation: ${op}` });
    }
    res.json({ result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'web', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Calculator web UI available at http://localhost:${PORT}`);
});
