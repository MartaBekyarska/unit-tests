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

    function convertLitresToGallons(volume) {

      let litre = volume;
      let gallon = 1;
      
      gallon = litre * 0.22;
      return gallon.toFixed(2);
    }

    function convertGallonsToLitres(volume) {

      let litre = 1;
      let gallon = volume;
      
      litre = gallon / 0.22;
      return litre.toFixed(0);
    }
  
