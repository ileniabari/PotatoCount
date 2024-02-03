import BagService from './BagService';
import express from 'express';
import bodyParser from 'body-parser';
import Bag from './model/Bag';

const app = express();
app.use(bodyParser.json());

const bagService = new BagService();

app.get('/bags', function (req, res) {
  const bags = bagService.getBags();

  console.log(bags);

  res.send(bags.map(it => it.toJSON()));
});

app.post('/bags', function (req, res) {
  const bagName = req.body.bag_name;

  console.log(req.body);

  const newBag = new Bag(bagName);

  const bag = bagService.addBag(newBag);

  res.send(bag);
});

app.listen(8080)