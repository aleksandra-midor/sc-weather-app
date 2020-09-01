const weather = [];
const dates = [];

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM has been loaded")
});


document.getElementById('add').addEventListener('click', function(){
    
    var temp = parseInt(document.querySelector('#temp').value);
    var date = document.querySelector('#date').value;

    if (Number.isInteger(temp) === true) {
        weather.push(temp)
    }  else {
        alert ('Please input a number')
    }
    dates.push(date)
    console.log(weather, dates)
})




//var date = document.querySelector('.form__label')

//document.addEventListener('DOMContentLoaded', function() {
 //   console.log("DOM has been loaded")
//});


