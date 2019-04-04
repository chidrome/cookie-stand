'use strict';

// global variables
var allStores = [];
var table = document.getElementById('storesTable');
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
var submitBtn = document.getElementById('submitButton');
var store = document.getElementById('store');
var min = document.getElementById('min');
var max = document.getElementById('max');
var avgCookie = document.getElementById('avgCookie');

// wait till the dom content loads before running the scripts
document.addEventListener('DOMContentLoaded', () => {

  populateTable();
  submitBtn.addEventListener('click', addStore);

});

// Constructor function
function Store(locationName, min, max, cookiePerSale, elId){
  this.location = locationName;
  this.minCustomer = min;
  this.maxCustomer = max;
  this.avgCookiePerSale = cookiePerSale;
  this.elementId = elId;
  this.cookiesPerHour = [];
}

// create store instances and store it in an array

allStores.push(new Store('1st and Pike', 23, 65, 6.3, 'pike'));
allStores.push(new Store('Seatac Airport', 3, 24, 1.2, 'seatac'));
allStores.push(new Store('Seattle Center', 11, 38, 3.7, 'seattleCenter'));
allStores.push(new Store('Capitol Hill', 20, 38, 2.3, 'capitolHill'));
allStores.push(new Store('Alki', 2, 16, 4.6, 'alki'));

/////////////////// Helper functions ///////////////////

function addStore(e){
  e.preventDefault();
  console.log(store.value, parseInt(min.value), parseInt(max.value), parseInt(avgCookie.value));
}

function populateTable(){
  // add the header row
  let headerTr = document.createElement('tr');
  let elTd = document.createElement('td');
  headerTr.textContent = 'Store Location';
  elTd.textContent = 'Total';
  for(let i = 0; i < storeHours.length; i++){
    let elTd = document.createElement('td');
    elTd.textContent = storeHours[i];
    headerTr.appendChild(elTd);
  }
  headerTr.appendChild(elTd);
  table.appendChild(headerTr);
  // loop through all the stores after constructing the objects
  for(let i = 0; i < allStores.length; i++){
    let elTr = document.createElement('tr');
    let elTd = document.createElement('td');
    let storeTotal = 0;
    elTr.textContent = allStores[i].location;
    for(let j = 0; j < storeHours.length; j++){
      let elTd = document.createElement('td');
      let numberOfCustomersPerHour = Math.floor(Math.random() * (allStores[i].maxCustomer - allStores[i].minCustomer) + allStores[i].minCustomer);
      let salesThisHour = Math.round(numberOfCustomersPerHour * allStores[i].avgCookiePerSale);
      storeTotal = storeTotal + salesThisHour;
      allStores[i].cookiesPerHour.push(salesThisHour);
      elTd.textContent = salesThisHour;
      elTr.appendChild(elTd);
    }
    elTd.textContent = storeTotal; 
    elTr.appendChild(elTd);
    table.appendChild(elTr);
  }
  // add the footer row
  let footerTr = document.createElement('tr');
  let footerTd = document.createElement('td');
  let totalCookies = 0;
  footerTr.textContent = 'Hourly Total';
  for(let i = 0; i < storeHours.length; i++){
    let fTd = document.createElement('td');
    let hourlyTotal = 0;
    for(let j = 0; j < allStores.length; j++){
      hourlyTotal = hourlyTotal + allStores[j].cookiesPerHour[i];
    }
    fTd.textContent = hourlyTotal;
    footerTr.appendChild(fTd);
    totalCookies = totalCookies + hourlyTotal;
  }
  table.appendChild(footerTr);
  footerTd.textContent = totalCookies;
  footerTr.appendChild(footerTd);
}
