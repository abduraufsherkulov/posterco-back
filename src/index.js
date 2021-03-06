var mongoose = require('mongoose');
var express = require('express');
var dotenv = require('dotenv');
var cors = require('cors');
var order = require('./routes/order.route');
var bodyParser = require('body-parser');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

// routes
app.use('/orders/', order);
// error handler for 404
app.use((_, res) => {
  res.status(404).send("Sorry can't find that!");
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Backend app is listening at http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.log(process.env.MONGO_URL);
    console.log(err, 'index js');
  });
