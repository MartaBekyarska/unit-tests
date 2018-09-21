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

    function convertPoundsToKilos(weight) {

      let pounds = weight;
      let kilo = 0;
      kilo = pounds * 0.4536;
      return kilo.toFixed(4);
    }

    function convertKilosToPounds(weight) {

      let kilo = weight;
      let pounds = 1;
      pounds = kilo / 0.4536;
      return pounds.toFixed(0);
    }

    function convertPoundsToKilos(weight) {

      let pounds = weight;
      let kilo = 0;
      kilo = pounds * 0.4536;
      return kilo.toFixed(4);
    }

    function convertKilosToPounds(weight) {

      let kilo = weight;
      let pounds = 1;
      pounds = kilo / 0.4536;
      return pounds.toFixed(0);
    }

    function convertMilesToKms(distance) {

      let miles = distance;
      let kms = 1;
      
      kms = miles * 1.609;
      return kms.toFixed(1);
    }

    function convertKmsToMiles(distance) {

      let kms = distance;
      let miles = 1;
      
      miles = kms / 1.609;
      return miles.toFixed(3);
    }
  
