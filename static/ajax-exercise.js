'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  fetch('/fortune')
    .then(response => response.text())
    .then(responseData => {
      document.querySelector('#fortune-text').innerHTML = responseData;
    });

}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;
  fetch(`${url}?zipcode=${zipcode}`)
    .then(response => response.json())
    .then(jsonData => {
      document.querySelector('#weather-info').innerHTML = jsonData.forecast;

    });

}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)


  const formInputs = {
    type: document.querySelector('#melon-type-field').value,
    amount: document.querySelector('#qty-field').value,
  };

  fetch('/order-melons.json', {
        method: 'POST',
        body: JSON.stringify(formInputs),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(jsonData => {
          document.querySelector('#order-status').innerHTML = jsonData.result_text;
     });
}




document.querySelector('#order-form').addEventListener('submit', orderMelons);


// document.querySelector('#order-form').addEventListener('submit', evt => {
//   evt.preventDefault();

//   const formInputs = {
//     type: document.querySelector('#type-field').value,
//     amount: document.querySelector('#amount-field').value,
//   };

//   fetch('/new-order', {
//     method: 'POST',
//     body: JSON.stringify(formInputs),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then(response => response.json())
//     .then(responseJson => {
//       alert(responseJson.status);
//     });
// });


