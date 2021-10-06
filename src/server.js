const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/bookRoutes');

const app = express();

const port = 3000;

mongoose
  .connect('mongodb://localhost:27017/books', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected with database.');
    app.emit('done');
  })
  .catch((e) => console.log(e));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/obras', routes);

app.on('done', () => {
  app.listen(3000, () => {
    console.log(
      `🚀 Server is running on port ${port} - http://localhost:${port}/obras`
    );
  });
});
