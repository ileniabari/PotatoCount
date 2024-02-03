import BagService from './BagService';
import express from 'express';
import bodyParser from 'body-parser';
import Bag from './model/Bag';

const app = express();
app.use(bodyParser.json());

const bagService = new BagService();

app.get('/bags', function (req, res) {
  const bags = bagService.getBags();

  res.send(bags);
});

app.post('/bags', function (req, res) {
  const bagName = req.body.bag_name;

  const newBag = new Bag(bagName);

  const bag = bagService.addBag(newBag);

  res.send(bag);
});

app.get('/bags/:bag_name', function (req, res) {
  const bagName = req.params.bag_name;

  const bag = bagService.getBag(bagName);

  if (!bag) {
    res.sendStatus(404);
  } else {
    res.send(bag);
  }
});

app.listen(8080)