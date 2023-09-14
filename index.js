const express = require('express');
const app = express();
const port = 3000;

//define que a pasta que se vai utilizar o template e qual tipo de engine
app.set('views' , './views'); 
app.set('view engine' , 'pug');

//define que os elementos estaticos vem da pasta public
app.use(express.static('public'));

//rotas
app.get('/' , (req , res) =>{
    res.render('home' ,{ //objeto que eu criei
        title: 'botão maluco',
        mensagem: 'você vai me passar de ano?'
    });
});




//sempre deixar o servidor no final
app.listen(port , function(){
    console.log("o servidor esta rodando em localhost:" + port)
}); 