const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware 
app.use(express.urlencoded());
app.use(express.json());

app.get('/hello', (req, res) => {
    req.json({msg:"Greetings"})
})
app.listen(PORT, () => {
    console.log(`Server running on http:localhost:${PORT}`)
})