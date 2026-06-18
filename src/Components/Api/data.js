export const getWeatherData = async (city) => {
  const weatherData = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=c4192a5f06cd456db2a143513243012&q=${city}`
  );
  return await weatherData.json();
};
