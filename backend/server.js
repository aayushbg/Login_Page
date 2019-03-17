
const { Pool,Client } = require('pg'),
       express = require('express'),
       bodyParser = require('body-parser'),
       path = require('path')
       PORT = 5000,
       app = express();


// MiddleWares
app.use(express.static(path.join(__dirname,'../frontend')));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req,res) => {
    console.log(req.body);
    res.status(200);
    res.set({"Content-Type":"text/plain"});
    res.end();
});

app.listen(PORT, () => {
    console.log(`[.+.] Server initalised on Port:${PORT}`);
});
