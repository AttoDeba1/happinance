import * as TemperaturesService from "../services/temperatures.service"
const express = require('express');
const router = express.Router();

router.get('/average', async function (req, res, next) {
  let selected_city = req.query.city
  let result
      if(selected_city){
        result= await TemperaturesService.getAVGTemperatureByCity(selected_city)
        res.send({ city: selected_city, avg_temperature: result});
      } else { result = await TemperaturesService.getAVGTemperature()
        res.send(result);
      }
});

router.get('/', async function (req, res, next) {
  let selected_city = req.query.city;
  let temperatures;
  if(selected_city) temperatures = await TemperaturesService.findAllByCity(selected_city);
  else temperatures = await TemperaturesService.findAll();
  res.send(temperatures);
});

module.exports = router;
