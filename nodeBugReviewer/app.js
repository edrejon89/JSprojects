// Instrucciones para usar express
const express = require('express');
const app = express();

// referencia para handlebars
const exphbs = require('express-handlebars');

// Referencia para body Parser
// const bodyParser = require('body-parser');

// Setiando un puerto para el servidor
const PORT = process.env.PORT || 5000; // Instruccion para tomar un puerto asignado o asignar un puerto.

// app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

// Configurando el middleware para Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// configurando la ruta get para el index de handlebars
app.get('/',(req,res)=>{
    res.render('home',{
        title: "Home"
    });
});

app.get('/crear.html',(req,res)=>{
    res.render('crear',{
        title: "Crear Reporte"
    });
});

app.listen(PORT, ()=>{
    console.log("Server listening on port " + PORT);
});