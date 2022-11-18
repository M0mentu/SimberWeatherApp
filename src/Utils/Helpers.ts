import {weatherItem} from 'Types';

export const combineCityCountryName = (item: weatherItem) => {
  return item.name + (item?.sys?.country ? ', ' + item.sys?.country : '');
};

export const temperatureSetter = (temp: number) => {
  return temp || temp == 0 ? Math.trunc(temp) + '° C' : null;
};

export const humiditySetter = (humidity: number) => {
  return humidity || humidity == 0 ? humidity + '%' : null;
};

export const windSpeedSetter = (windSpeed: number) => {
  return windSpeed || windSpeed == 0 ? windSpeed + ' km/h' : null;
};

export const getTodaysDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  const hours = today.getHours();
  let minutes = today.getMinutes();
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const time = hours + ':' + formattedMinutes;
  const dateTime = dd + '.' + mm + '.' + yyyy + '.' + ' - ' + time;
  return dateTime;
};
