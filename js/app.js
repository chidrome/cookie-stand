'use strict';

// global variables
var pikeStore = document.getElementById('pike');
var seatacStore = document.getElementById('seatac');
var seattleCenterStore = document.getElementById('seattleCenter');
var capitolHillStore = document.getElementById('capitolHill');
var alkiStore = document.getElementById('alki');


var pike = {
  location: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiePerSale: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSoldForDay: 0
};

var seatac = {
  location: 'Seatac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookiePerSale: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSoldForDay: 0
};

var seattleCenter = {
  location: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookiePerSale: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSoldForDay: 0
};

var capitolHill = {
  location: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookiePerSale: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSoldForDay: 0
};

var alki = {
  location: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookiePerSale: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSoldForDay: 0
};

var storeHours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '7pm',
  '8pm',
];

document.addEventListener('DOMContentLoaded', () => {

  showAllStoreSales();

});

////////////////// HELPER FUNCTIONS //////////////////

var salesPerHour = (min, max, avgCookiePerSale, store, locationName) => {
  store.innerHTML = locationName.location;
  for(let i = 0; i < storeHours.length; i++){
    let liEl = document.createElement('li');
    let numberOfCustomersPerHour = Math.floor(Math.random() * (max - min) + min);
    // liEl.textContent = `Number of customers for ${storeHours[i]} is ${numberOfCustomersPerHour} and avg cookies sold is ${Math.round(numberOfCustomersPerHour * avgCookiePerSale * 10) / 10}.`;
    liEl.textContent = `${storeHours[i]}: ${Math.round(numberOfCustomersPerHour * avgCookiePerSale )}`;
    store.appendChild(liEl);
  }
};

var showAllStoreSales = () => {
  // Pike place sales per hour
  salesPerHour(pike.minCustomer, pike.maxCustomer, pike.avgCookiePerSale, pikeStore, pike);
  // Seatac sales per hour
  salesPerHour(seatac.minCustomer, seatac.maxCustomer, seatac.avgCookiePerSale, seatacStore, seatac);
  // Seattle Center
  salesPerHour(seattleCenter.minCustomer, seattleCenter.maxCustomer, seattleCenter.avgCookiePerSale, seattleCenterStore, seattleCenter);
  // Capitol hill
  salesPerHour(capitolHill.minCustomer, capitolHill.maxCustomer, capitolHill.avgCookiePerSale, capitolHillStore, capitolHill);
  // Alki
  salesPerHour(alki.minCustomer, alki.maxCustomer, alki.avgCookiePerSale, alkiStore, alki);
};

