const app = require('./src/app');
const porta = 8080; 

app.listen(porta, () =>{
    console.log(`Listening on http://localhost:${porta}`)
})