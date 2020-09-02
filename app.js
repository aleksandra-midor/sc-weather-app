let weather = [];
// line below should be remover at the end and above LET weather changed to CONST 
const weatherAdded = [{temperature: 04, date:'2020-03-15'},{temperature:10, date:'2020-04-15'},{temperature:28, date:'2020-07-15'},{temperature:02, date:'2020-11-15'}];


document.addEventListener('DOMContentLoaded', function() {
    weather = weather.concat(weatherAdded)
    console.log("DOM has been loaded",weather)
});


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
            // console.log(x)

            var xDateSplited = x.date.split('-')
            // console.log(xDateSplited[1])
            // if (xDateSplited[1] !== dateSplited[1]) {
                //     return false
                // } 
                return xDateSplited[1] === dateSplited[1]
            }) 
            console.log(foundIndex)
            if (foundIndex === -1) {
                weather.push(dayWeather)
        }


    }  else {
        alert ('Please input a number')
    }
    console.log(weather)
})


//var maxTemp = Math.max(...weather.temperature);
//console.log(maxTemp)




//var date = document.querySelector('.form__label')

//document.addEventListener('DOMContentLoaded', function() {
 //   console.log("DOM has been loaded")
//});


