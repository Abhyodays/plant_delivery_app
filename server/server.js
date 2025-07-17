const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const { login } = require('./helpers');


const dbPath = path.join(__dirname, 'db.json');
const readData = () => {
    try {
        const jsonData = fs.readFileSync(dbPath, 'utf8');
        return JSON.parse(jsonData);
    } catch (err) {
        console.error('Error reading or parsing db.json:', err);
        return null;
    }
};

const writeData = (data) => {
    try {
        fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (err) {
        console.error('Error writing to db.json:', err);
    }
};

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await login(email, password);
        console.log({ user });

        if (user) {
            const nameFromEmail = user.email?.split('@')[0] || 'User';

            const userWithoutPassword = {
                name: nameFromEmail,
                email: user.email,
                id: user.uid
            };

            return res.status(200).json({ message: 'Login successful', user: userWithoutPassword });
        } else {
            return res.status(404).json({ message: 'Invalid email or password' });
        }

    } catch (err) {
        console.log("error:", err);
        return res.status(500).json({ error: err });
    }
});


app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;

    const data = readData();
    if (!data || !data.users) {
        return res.status(500).json({ message: 'Error reading data' });
    }

    const userIndex = data.users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    if (name) {
        data.users[userIndex].name = name;
    }
    if (email) {
        data.users[userIndex].email = email.trim().toLowerCase();
    }

    writeData(data);
    res.json({ message: 'User updated successfully', user: data.users[userIndex] });
});
app.get('/plants', (req, res) => {
    const data = readData();
    if (data) {
        res.json(data.plants);
    } else {
        res.status(500).json({ message: 'Error reading data' });
    }
});

app.get('/popular-plants', (req, res) => {
    const data = readData();
    if (data) {
        res.json(data['popular-plants']);
    } else {
        res.status(500).json({ message: 'Error reading data' });
    }
});

app.get('/new-arrivals', (req, res) => {
    const data = readData();
    if (data) {
        res.json(data['new-arrivals']);
    } else {
        res.status(500).json({ message: 'Error reading data' });
    }
});

app.get('/plants/:id', (req, res) => {
    const data = readData();
    if (data) {
        const plant = data.plants.find(p => p.id === req.params.id);
        if (plant) {
            res.json(plant);
        } else {
            res.status(404).json({ message: 'Plant not found' });
        }
    } else {
        res.status(500).json({ message: 'Error reading data' });
    }
});

app.get('/cart/:userId', (req, res) => {
    const data = readData();
    if (data && data.cart) {
        const userCart = data.cart.find(cart => cart.userId === req.params.userId);
        if (userCart) {
            res.json(userCart.items);
        } else {
            res.json([]);
        }
    } else {
        res.status(500).json({ message: 'Error reading data' });
    }
});

app.post('/cart/:userId', (req, res) => {
    const userId = req.params.userId;
    console.log("userId in cart:", userId)
    const item = req.body;

    const data = readData();
    if (!data) {
        return res.status(500).json({ message: 'Error reading data' });
    }

    if (!data.cart) {
        data.cart = [];
    }

    let userCart = data.cart.find(cart => cart.userId === userId);
    if (!userCart) {
        userCart = { userId, items: [] };
        data.cart.push(userCart);
    }
    userCart.items.push(item);
    writeData(data);
    res.status(201).json({ message: 'Item added to cart', item });
});

app.delete('/cart/:userId/:itemId', (req, res) => {
    const userId = req.params.userId;
    const itemId = req.params.itemId;

    const data = readData();
    if (!data || !data.cart) {
        return res.status(500).json({ message: 'Error reading data' });
    }

    const userCartIndex = data.cart.findIndex(cart => cart.userId === userId);
    if (userCartIndex === -1) {
        return res.status(404).json({ message: 'Cart not found' });
    }

    data.cart[userCartIndex].items = data.cart[userCartIndex].items.filter(item => item.id !== itemId);
    writeData(data);
    res.json({ message: 'Item removed from cart' });
});
app.get('/search-plants', (req, res) => {
    const { q } = req.query;
    const data = readData();
    if (!data || !data.plants) {
        return res.status(500).json({ message: 'Error reading data' });
    }

    const ignoredKeywords = ['plants'];
    const keyword = typeof q === 'string' ? q.toLowerCase() : '';
    const keywords = keyword.split(' ')
        .filter(keyword => keyword.trim() && !ignoredKeywords.includes(keyword.trim()));

    if (keywords.length === 0) {
        return res.json([]);
    }

    const filteredPlants = data.plants.filter((plant) => {
        return keywords.every(keyword =>
            plant.name.toLowerCase().includes(keyword) ||
            plant.type.toLowerCase().includes(keyword) ||
            plant.potType.toLowerCase().includes(keyword) ||
            plant.price.toLowerCase().includes(keyword) ||
            plant.description.toLowerCase().includes(keyword)
        );
    });

    res.json(filteredPlants);
});

app.post("/order", (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) {
            return res.status(400).json({ message: 'Missing userId in request body' });
        }

        const data = readData();
        if (!data || !Array.isArray(data.cart)) {
            return res.status(500).json({ message: 'Cart not initialized' });
        }

        const userCart = data.cart.find(cart => String(cart.userId) === String(userId));
        console.log("userCart:", userCart, "data.cart:", data.cart)
        if (!userCart || !Array.isArray(userCart.items) || userCart.items.length === 0) {
            console.log("cart empty");
            return res.status(400).json({ message: 'No items in cart' });
        }

        if (!Array.isArray(data.orders)) {
            data.orders = [];
        }

        const newOrder = {
            orderId: uuid(),
            userId: userId,
            items: userCart.items
        };

        data.orders.push(newOrder);
        console.log("orders:", data.orders)
        userCart.items = []; // Clear cart instead of setting null
        writeData(data);
        res.status(200).json(newOrder);
    } catch (err) {
        console.log("error:", err);
        res.status(500).json({ message: err.message });
    }
});

app.get('/order/:userId', (req, res) => {
    const userId = req.params.userId;
    const data = readData();
    if (data && data.orders) {
        const allOrders = data.orders.filter(o => o.userId === userId);
        res.status(200).json({ orders: allOrders });
        return;
    } else {
        res.status(500).json({ message: 'Error reading data' });
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
