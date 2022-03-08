const express = require("express");
const app = express();
const path = require("path");
const webRoutes = require('./src/routes/webRoutes');
const productsRoutes = require('./src/routes/productsRoutes');
const userRoutes = require('./src/routes/userRoutes');



app.set('views', './src/views');
app.set('view engine', 'ejs');




const pathStatic = path.resolve(__dirname, "./public");
app.use(express.static(pathStatic));

app.use('/' ,webRoutes);
app.use('/products' ,productsRoutes);
app.use('/user' ,userRoutes);
app.listen(3000, () => console.log("server running on port 3000"));

