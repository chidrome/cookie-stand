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
};

var seatac = {
  location: 'Seatac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookiePerSale: 1.2,
};

var seattleCenter = {
  location: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookiePerSale: 3.7,
};

var capitolHill = {
  location: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookiePerSale: 2.3,
};

var alki = {
  location: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookiePerSale: 4.6,
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

var salesPerHour = (min, max, avgCookiePerSale, store) => {
  let totalSales = 0;
  for(let i = 0; i < storeHours.length; i++){
    let liEl = document.createElement('li');
    let numberOfCustomersPerHour = Math.floor(Math.random() * (max - min) + min);
    let salesThisHour = Math.round(numberOfCustomersPerHour * avgCookiePerSale);
    liEl.textContent = `${storeHours[i]}: ${salesThisHour} cookies`;
    totalSales = totalSales + salesThisHour;
    store.appendChild(liEl);
  }
  store.appendChild(document.createElement('li')).innerHTML = `Total is: ${totalSales} cookies for the day.`;
};

var showAllStoreSales = () => {
  // Pike place sales per hour
  salesPerHour(pike.minCustomer, pike.maxCustomer, pike.avgCookiePerSale, pikeStore);
  // Seatac sales per hour
  salesPerHour(seatac.minCustomer, seatac.maxCustomer, seatac.avgCookiePerSale, seatacStore);
  // Seattle Center
  salesPerHour(seattleCenter.minCustomer, seattleCenter.maxCustomer, seattleCenter.avgCookiePerSale, seattleCenterStore);
  // Capitol hill
  salesPerHour(capitolHill.minCustomer, capitolHill.maxCustomer, capitolHill.avgCookiePerSale, capitolHillStore);
  // Alki
  salesPerHour(alki.minCustomer, alki.maxCustomer, alki.avgCookiePerSale, alkiStore);
};

