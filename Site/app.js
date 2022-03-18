const express = require("express");
const app = express();
const path = require("path");
const webRoutes = require('./src/routes/webRoutes');
const productsRoutes = require('./src/routes/productsRoutes');
const userRoutes = require('./src/routes/userRoutes');
const methodOverride =  require('method-override');


app.set('views', './src/views');
app.set('view engine', 'ejs');

// ************ Para usar Post ************
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));



const pathStatic = path.resolve(__dirname, "./public");
app.use(express.static(pathStatic));

app.use('/' ,webRoutes);
app.use('/products' ,productsRoutes);
app.use('/user' ,userRoutes);


// ******* Error 404*********
app.use((req , res ,next) =>{
    res.status(404).render('not-found');
})



app.listen(3000, () => console.log("server running on port 3000"));

