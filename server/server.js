const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

let data;
try {
    const jsonData = fs.readFileSync('db.json', 'utf8');
    data = JSON.parse(jsonData);
} catch (err) {
    console.error('Error reading or parsing db.json:', err);
    process.exit(1);
}

// GET all users
app.get('/users', (req, res) => {
    res.json(data.users);
});

// GET user by id
app.get('/users/:id', (req, res) => {
    const user = data.users.find(u => u.id === req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// GET all plants
app.get('/', (req, res) => {
    res.json(data.plants);
});

// GET popular plants
app.get('/popular-plants', (req, res) => {
    res.json(data['popular-plants']);
});

app.get('/new-arrivals', (req, res) => {
    res.json(data['new-arrivals']);
});
// GET plant by id
app.get('/:id', (req, res) => {
    const plant = data.plants.find(p => p.id === req.params.id);
    if (plant) {
        res.json(plant);
    } else {
        res.status(404).json({ message: 'Plant not found' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});