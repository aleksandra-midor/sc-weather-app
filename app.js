const weather = [];


document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM has been loaded",weather)
    displayTable()

    
    document.getElementById('maxTemp').addEventListener('click', highestTemp); 

    document.getElementById('minTemp').addEventListener('click', lowestTemp);

    document.getElementById('seed').addEventListener('click', generateTemp);

    document.getElementById('add').addEventListener('click', addRecord);
  });
  


  function displayTable() {
      
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
        var dateSplited = date.split('-') 

        var foundIndex = weather.findIndex ( x => {
            var xDateSplited = x.date.split('-')
                return xDateSplited[1] === dateSplited[1]
            }) 
            console.log(foundIndex)
            if (foundIndex === -1) {
                weather.push(dayWeather)
        }
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
      date: '2020-' + i + '-15'
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