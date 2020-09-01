const weather = [];


document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM has been loaded")
});


document.getElementById('add').addEventListener('click', function(){
    
    var temp = parseInt(document.querySelector('#temp').value);
    var date = document.querySelector('#date').value;

    
    if (Number.isInteger(temp) === true && date !== '') {
        var dayWeather = {
            temperature: temp,
            date: date
        }
        weather.push(dayWeather)
    }  else {
        alert ('Please input a number')
    }
    console.log(weather)
})



//var date = document.querySelector('.form__label')

//document.addEventListener('DOMContentLoaded', function() {
 //   console.log("DOM has been loaded")
//});


