let weather = [];
var fetchedWeather = [];


document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM has been loaded",weather)
    // displayTable()

    document.getElementById('add').addEventListener('click', addRecord);
    
    document.getElementById('average').addEventListener('click', averTemp);
    
    document.getElementById('maxTemp').addEventListener('click', highestTemp); 

    document.getElementById('minTemp').addEventListener('click', lowestTemp);
    
    document.getElementById('seed').addEventListener('click', generateTemp);

  });
  

  fetch ('https://my-json-server.typicode.com/aleksandra-midor/sc-weather-app-json-data/weather2019')
  .then(response => response.json())
  .then(data => { fetchedWeather = data
    console.log(data)
  });


  function displayChart(arr1,arr2) {
    var myData = {
      labels: [],
      datasets: [{
        label: 'temperature in 2020',
        data: [],
        borderColor: [
          '#2186EB'
        ],
        borderWidth: 2,
        fill: false
      },
      {
        label: 'temperature in 2019',
        data: [],
        borderColor: [
          '#DE3A11'
        ],
        borderWidth: 2,
        fill: false
      }
    ],
  }
  
  
  for(i = 0; i < arr1.length; i++) {
    myData.labels.push(arr1[i].date);
    myData.datasets[0].data.push(arr1[i].temperature);
  }
  
  console.log(arr2)
  for(i = 0; i < arr2.length; i++) {
    myData.labels.push(arr2[i].date);
    myData.datasets[1].data.push(arr2[i].temperature);
  }

  
  
  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: myData,
    options: {
      scales: {
        yAxes: [{                                                    
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  console.log(myChart)
}



  function displayTable() {
    
    weather = dateSorting(weather);
      
    var html = ' '
    html+='<tr>'
    html+='<th>'+'Date'+'</th>';
    html+='<th>'+'Temperature'+'</th>';
    html+='</tr>'
    for (var i = 0; i < weather.length; i++) {

      html+='<tr>'
      html+='<td>'+ weather[i].date +'</td>';
      html+='<td>'+ weather[i].temperature +'</td>';
      html+='</tr>'
    }

    displayChart(weather,fetchedWeather);

   document.getElementById("tableWeather").innerHTML = html
  }



  function addRecord() { 
    var temp = parseInt(document.querySelector('#temp').value);
    var date = document.querySelector('#date').value;
    
    var messageTemp = document.getElementById('temp')
    var messageDate = document.getElementById('date')


    if (Number.isInteger(temp) === true && date !== '') {
      var dayWeather = {
        temperature: temp,
        date: date
      }
      weather.push(dayWeather)
      weather = dateSorting(weather)

    }
    displayTable()
    
    
    if (Number.isInteger(temp) === false ) { 
      messageTemp.classList.add("form__input--error")
    } else {
      messageTemp.classList.remove("form__input--error")
    }
    
    
    if (date === '') {
      // alert ('Please input a number as a date and choose a date')
      messageDate.classList.add("form__input--error")
    } else {
      messageDate.classList.remove("form__input--error")    
    }

        // var dateSplited = date.split('-') 
        // var foundIndex = weather.findIndex ( x => {
        //     var xDateSplited = x.date.split('-')
        //         return xDateSplited[1] === dateSplited[1]
        //     }) 
        //     console.log(foundIndex)
        //     if (foundIndex === -1) {
        //     }
          
}



function generateTemp() {
  for (var i = 1; i < 13; i++) {
    var newDayTemp = {
      temperature: Math.floor(Math.random() * 50) ,
      date: randomDate()

    }
    weather.push(newDayTemp);
  }
  displayTable()
}


function averTemp() {
  var sumTemp = 0;

  for (var i = 0; i < weather.length; i++) {
   sumTemp += weather[i].temperature
   var averTemp = Math.round(sumTemp / weather.length)
  }
  document.getElementById("message").innerHTML = 'Average temperature is ' + averTemp + '&deg;C'
}



function highestTemp() {
  var highTemp = 0;

  for (var i = 0; i < weather.length; i++) {
    if (highTemp < weather[i].temperature) {
      highTemp = weather[i].temperature
    }
  }
  document.getElementById("message").innerHTML = 'Max temperature is ' + highTemp + '&deg;C'
  console.log('Max temperature is ' + highTemp);
}



function lowestTemp() {
  var lowTemp =100;

  for (var i = 0; i < weather.length; i++) {
    if (lowTemp > weather[i].temperature) {
      lowTemp = weather[i].temperature
    }
  }
  document.getElementById("message").innerHTML = 'Min temperature is ' + lowTemp + '&deg;C'
  console.log('Min temperature is ' + lowTemp);
}


// new functions

function randomDate() {
  var start = new Date(2020,00,01)
  var end = new Date(2020,11,31)
  var dateObj = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));


  var month = dateObj.getMonth() + 1;
  var day = dateObj.getDate();
  var year = dateObj.getFullYear();

  if (month < 10) {
    month = '0' + month
  }  

  if (day < 10) {
    day = '0' + day
  }

  var newDate = year + '-' + month + '-' + day;
  return newDate
}



function dateSorting(array) {
  var sortedWeather = []
  var weatherDates = [];

  for (i = 0; i < array.length; i++) {
    var dateSplit = array[i].date
    weatherDates.push(dateSplit);
  }
  console.log(weatherDates)
  bubble(weatherDates)
  console.log(weatherDates)
  var prop = 'date'

  for (i = 0; i < weatherDates.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (weatherDates[i] === array[j][prop]) {
        sortedWeather.push(array[j])
      } 
    }
  }

  console.log(sortedWeather);
  return sortedWeather.reverse()

}



function bubble(array) {
  
var length = array.length
   
    for (let i=0; i< length; i++) {
      for (let j=0; j<length-1;j++) {
        if (array[j] >array[j+1]) {
          //  swap
          let hold = array[j]
          array[j] = array[j+1]
          array[j+1] = hold
        }
      }
    }
    // return array;
}




// SCHOOL EXAMPLE - HOW TO GENERATE RANDOM DATE AND NUMBER (TEMPERATURE)

// weatherNew = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => {
//   return {
//     date: new Date(
//       `2020-${Math.ceil(Math.random() * 12)}-${Math.ceil(
//         Math.random() * 28
//       )}`
//     ).toISOString(),
//     temperature: Math.floor(Math.random() * num * 10),
//   };
// });
// console.log(weatherNew);






