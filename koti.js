const express = require('express')
const app = express()
const path = require('path'); 
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/home', function (req, res) {
    res.render("home")
});
console.log("hello");
app.listen(3003);