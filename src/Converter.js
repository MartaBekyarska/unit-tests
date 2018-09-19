/** Unit Converter **/
function convertFahrenheitToCelsius(temperature) {
  //conversion code
  
  let farenheit = temperature;
  let celsius = 20;
  celsius = (farenheit - 32)/1.8; 
  return celsius.toFixed(1);
  }
  

  function convertCelsiusToFahrenheit(temperature) {
    //conversion code
    
    let fahrenheit = 0;
    let celsius = temperature;
    fahrenheit = celsius * 1.8 + 32;
    return fahrenheit.toFixed(1);
    }
  
