const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const port = process.env.port || 3000;

app.listen(port,()=>{
    console.log('application is running on port '+port)
})



