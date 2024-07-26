const express = require('express');  
const bodyParser = require('body-parser');  
const fs = require('fs');  
  
const app = express();  
const port = 3000; 
  
app.use(bodyParser.json());  
  
app.post('/log_key', (req, res) => {  
    const { key } = req.body;  
    console.log(`Received key: ${key}`);  
  
    fs.appendFile('log.txt', `${key}\n`, (err) => {  
        if (err) throw err;  
        console.log('The key was appended to log.txt');  
    });  
    res.send({ status: 'success', message: 'Key logged successfully' });  
});  
  
app.listen(port, () => {  
    console.log(`Server running on port ${port}`);  
});