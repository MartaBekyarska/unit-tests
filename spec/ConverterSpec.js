describe("Cooking Ingredients Converter", function() {

  describe("Temperatures", function() {
    it("Fahrenheit to Celsius", function() {
      var result = convertFahrenheitToCelsius(100);

      expect(result).toEqual('37.8');
    });
    it("Celsius to Fahrenheit", function() {
      var result = convertCelsiusToFahrenheit(37.8);

      expect(result).toEqual('100.0');
    });
  });

  describe("Weight", function() {
    it("Pounds to Kilos", function() {
      var result = convertPoundsToKilos(1);

      expect(result).toEqual('0.4536');
    });
    it("Kilos to Pounds", function() {
      var result = convertKilosToPounds(0.4536);

      expect(result).toEqual('1');
    });
  });

  describe("Volume", function() {
    it("Litres to Gallons", function() {
      var result = convertLitresToGallons(1);

      expect(result).toEqual('0.22');
    });
    it("Gallons to Litres", function() {
      var result = convertGallonsToLitres(0.22);

      expect(result).toEqual('1');
    });
});

describe("Distance", function() {
  it("Miles to Kms", function() {
    var result = convertMilesToKms(1);

    expect(result).toEqual('1.609');
  });
  it("Gallons to Litres", function() {
    var result = convertKmsToMiles(0.621);

    expect(result).toEqual('1');
  });
});
});
