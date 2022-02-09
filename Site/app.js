const express = require('express');
const app = express();
const path = require('path');



// app.use(express.static(path.join(__dirname, 'public')));

const pathStatic = path.resolve(__dirname , "./public")
app.use( express.static(pathStatic))

app.listen(3000 , () => console.log('server running on port 3000'));

app.get('/' , (req , res) =>{
    res.sendFile(path.join(__dirname , '/src/views/index.html'))
})






//Login
app.get('/login' , (req , res) =>{
    res.sendFile(path.join(__dirname , '/src/views/usuario/login.html'))
})