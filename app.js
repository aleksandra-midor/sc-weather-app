let weather = [];


document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM has been loaded",weather)
    displayTable()

    
    document.getElementById('maxTemp').addEventListener('click', highestTemp); 

    document.getElementById('minTemp').addEventListener('click', lowestTemp);

    document.getElementById('seed').addEventListener('click', generateTemp);

    document.getElementById('add').addEventListener('click', addRecord);
  });
  


  function displayTable() {
    
    dateSorting(weather);
      
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

   document.getElementById("tableWeather").innerHTML = html
  }



  function addRecord() { 
    var temp = parseInt(document.querySelector('#temp').value);
    var date = document.querySelector('#date').value;
    

    if (Number.isInteger(temp) === true && date !== '') {
        var dayWeather = {
            temperature: temp,
            date: date
        }
        
        weather.push(dayWeather)
        sortingWeather()
        // var dateSplited = date.split('-') 
        // var foundIndex = weather.findIndex ( x => {
        //     var xDateSplited = x.date.split('-')
        //         return xDateSplited[1] === dateSplited[1]
        //     }) 
        //     console.log(foundIndex)
        //     if (foundIndex === -1) {
        //     }
    }  else {
      alert ('Please input a number as a date and choose a date')
    }
          
    displayTable()
    console.log(weather)
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



function highestTemp() {
  var highTemp = 0;
  const weatherTemp = weather.map( dayWeather => dayWeather.temperature);
  console.log(weatherTemp);

  for (var i = 0; i < weatherTemp.length; i++) {
    if (highTemp < weatherTemp[i]) {
      highTemp = weatherTemp[i]
    }
  }
  console.log('Max temperature is' + highTemp);
}



function lowestTemp() {
  var lowTemp =100;
  const weatherTemp = weather.map( dayWeather => dayWeather.temperature);
  console.log(weatherTemp);

  for (var i = 0; i < weatherTemp.length; i++) {
    if (lowTemp > weatherTemp[i]) {
      lowTemp = weatherTemp[i]
    }
  }
  console.log('Min temperature is' + lowTemp);
}


// new functions

function randomDate() {
  var start = new Date(2020,00,01)
  var end = new Date(2020,11,31)
  var dateObj = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));


  var month = dateObj.getMonth() + 1;
  var day = dateObj.getDate();
  var year = dateObj.getFullYear();
  
  var newDate = year + '-' + month + '-' + day;
  return newDate
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





var wExc = [{temperature: 50, date: '2020-02-31'},{temperature: 23, date: '2020-11-16'},{temperature: 6, date: '2020-03-07'} ]



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

  for (i = 0; i < weatherDates.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (weatherDates[i] === array[j].date) {
        sortedWeather.push(array[j])
      } 
    }
  }

  console.log(sortedWeather);
  return sortedWeather
}


dateSorting(wExc);



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

