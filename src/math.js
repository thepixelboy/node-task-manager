const calculateTip = (total, tipPercent = 0.25) => total + total * tipPercent;

const celsiusToFahrenheit = (temp) => {
  return temp * 1.8 + 32;
};

const fahrenheitToCelsius = (temp) => {
  return (temp - 32) / 1.8;
};

module.exports = { calculateTip, celsiusToFahrenheit, fahrenheitToCelsius };
