let Country = require('country-state-city').Country;
let State = require('country-state-city').State;

console.log(Country.getAllCountries());
console.log(State.getAllStates());

const express = require('express');
const app = express();
const port = 3000;



app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});