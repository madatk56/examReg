const app = require('express')();
const bodyParser = require('body-parser');
const router = require('./src/routes/index')
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const port = process.env.port || 3000;

router(app);
app.listen(port,()=>{
    console.log('application is running on port '+port)
})



