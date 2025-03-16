const express = require('express');
const app = express();

app.use(express.json());

const interestingItems = [
    "A mysterious artifact from an ancient civilization.",
    "A futuristic gadget that predicts the weather with 100% accuracy.",
    "A legendary sword that glows when danger is near.",
    "An enchanted book that writes new stories every night.",
    "A rare flower that blooms only under a full moon.",
    "A quirky robot that tells the best dad jokes.",
    "A magical mirror that shows glimpses of the future."
];

app.get('/', (req, res) => {
    const randomItem = interestingItems[Math.floor(Math.random() * interestingItems.length)];
    res.json({ success: true,site:"You are visiting the test.niharheavrdevs.online", data: randomItem });
});

app.listen(3000);
