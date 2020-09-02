let weather = [];
// line below should be remover at the end and above LET weather changed to CONST 
const weatherAdded = [{temperature: 04, date:'2020-03-15'},{temperature:10, date:'2020-04-15'},{temperature:28, date:'2020-07-15'},{temperature:02, date:'2020-11-15'}];


document.addEventListener('DOMContentLoaded', function() {
    weather = weather.concat(weatherAdded)
    console.log("DOM has been loaded",weather)
    displayTable()

    const weatherTemp = weather.map( dayWeather => dayWeather.temperature);
    console.log(weatherTemp);

    document.getElementById('add').addEventListener('click', function(){
        
        var temp = parseInt(document.querySelector('#temp').value);
        var date = document.querySelector('#date').value;
        //var existingMonth = date
        
        
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



    })
            function displayTable() {
                
                var html = ' '
                for (var i = 0; i < weather.length; i++) {
                  html+='<tr>'
                  html+='<td>'+ weather[i].date +'</td>';
                  html+='<td>'+ weather[i].temperature +'</td>';

                  html+='</tr>'
                }
            
            document.getElementById("tableWeather").innerHTML = html
            }
    
    document.getElementById('maxTemp').addEventListener('click', function(){
        
        var maxTemp = Math.max(...weatherTemp);
        console.log(maxTemp)
    
    })

    document.getElementById('minTemp').addEventListener('click', function(){

        var minTemp = Math.min(...weatherTemp);
        console.log(minTemp)
    })
});







//var date = document.querySelector('.form__label')

//document.addEventListener('DOMContentLoaded', function() {
 //   console.log("DOM has been loaded")
//});


