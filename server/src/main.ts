import BagService from './BagService';
import express from 'express';
import bodyParser from 'body-parser';
var cors = require('cors');
import Bag from './model/Bag';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const bagService = new BagService();

app.get('/bags', function (req, res) {
  const bags = bagService.getBags();

  res.send(bags);
});

app.post('/bags', function (req, res) {
  const bagName = req.body.bag_name;

  const newBag = new Bag(bagName);

  bagService.addBag(newBag);

  res.send(newBag);
});

app.get('/bags/:bag_name', function (req, res) {
  const bagName = req.params.bag_name;

  const bag = bagService.getBag(bagName);

  if (!bag) {
    res.sendStatus(404);
    return;
  }

  res.send(bag);
});

app.get('/bags/:bag_name/potato_list', function (req, res) {
  const bagName = req.params.bag_name;

  const bag = bagService.getBag(bagName);

  if (!bag) {
    res.sendStatus(404);
    return;
  }
  
  res.send(bag);
});

app.put('/bags/:bag_name/potato_list/:potato_name', function (req, res) {
  const bagName = req.params.bag_name;
  const potatoName = req.params.potato_name;

  const qty = req.body.qty;

  if (!qty) {
    res.sendStatus(400);
    res.send({ "error": "invalid qty" });
    return;
  }

  const bag = bagService.getBag(bagName);

  if (!bag) {
    res.sendStatus(404);
    return;
  }

  bag.addPotato(potatoName, qty);

  const updatedPotatoQty = bag.getPotatoQuantity(potatoName);

  res.send(updatedPotatoQty.toString());
});

app.listen(8080);