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
});
