const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());  // Enable CORS for all origins
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World! On Platforms');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
