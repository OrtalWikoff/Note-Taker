const html = require ("./Routes/html");
const express = require ("express");
const app = express();

const api = require ("./Routes/api")

const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

// Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api', api);
app.use('/', html);

// PORT
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});

module.exports = app;