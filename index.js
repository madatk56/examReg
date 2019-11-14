const app = require('express')();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const router = require('./src/routes/index')

const corsOptions =({
	origin:'*',
	optionsSuccessStatus: 200 	
})
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(fileUpload());

const port = process.env.port || 3000;

router(app);
app.listen(port,()=>{
    console.log('application is running on port '+port)
})



