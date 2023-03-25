const express = require('express');
const path = require('path');
const PORT = process.env.port ?? '3000';

const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'styles')));

app.get('/', (req, res) => {
    res.status(200);
    res.render('index', { title: 'Hey', message: 'Hello there!' })

    // res.status(200).send('Hello World');
})

app.use((req, res) => {
    res.status(404).send('Something went wrong...')
})

app.listen(PORT, () => console.log('app listen port:', PORT));