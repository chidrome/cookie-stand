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

////////////////// HELPER FUNCTIONS //////////////////

var numberOfCustomersPerHour = (min, max) => {
  let customersPerHour = []
  for(let i = 0; i < storeHours.length; i++){
    customersPerHour.push(Math.floor(Math.random() * (max - min) + min));
  }
  return customersPerHour;
};

var cookiesSoldPerHour = (arrayOfCustomersPerHour, avgCookiePerSale) => {
  let cookiesPerHour = [];
  for(let i = 0; i < arrayOfCustomersPerHour.length; i++){
    cookiesPerHour.push(Math.round(arrayOfCustomersPerHour[i] * avgCookiePerSale * 10) / 10);
  }
  return cookiesPerHour;
};

var totalCookiesSoldForDay = (arrayOfCookiesSoldPerHour) => {
  let totalCookies = 0;
  for(let i = 0; i < arrayOfCookiesSoldPerHour.length; i++){
    totalCookies = totalCookies + arrayOfCookiesSoldPerHour[i];
  }
  return totalCookies;
};

pikeStore.innerHTML = '1st and Pike';
var salesPerHour = (min, max, avgCookiePerSale) => {
  for(let i = 0; i < storeHours.length; i++){
    let liEl = document.createElement('li');
    let numberOfCustomersPerHour = Math.floor(Math.random() * (max - min) + min);
    liEl.textContent = `Number of customers for ${storeHours[i]} is ${numberOfCustomersPerHour} and avg cookies sold is ${Math.round(numberOfCustomersPerHour * avgCookiePerSale * 10) / 10}.`;
    pikeStore.appendChild(liEl);
  }
};

salesPerHour(23, 65, 6.3);
