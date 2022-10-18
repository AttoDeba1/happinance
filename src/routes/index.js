import * as TemperaturesService from "../services/temperatures.service"
const express = require('express');
const {getTemperatures, getAVGTemperature, getCities} = require("../databases");
const router = express.Router();

router.get('/', async function (req, res, next) {
  let selected_city = req.query.city;
  let temperatures;
  if(selected_city) temperatures = await TemperaturesService.findAllByCity(selected_city);
  else temperatures = await TemperaturesService.findAll();
   const avg_temperatures = await TemperaturesService.getAVGTemperature();
  const avg_temperature = await TemperaturesService.getAVGTemperatureByCity(selected_city)
  const cities = await TemperaturesService.getCities()
  res.render('index', {title: 'Happinance APP', cities: cities, items: temperatures, selected_city: selected_city, avg_temperature:avg_temperature,avg_temperatures:avg_temperatures});
});




module.exports = router;
