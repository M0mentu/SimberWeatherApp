import {
  combineCityCountryName,
  humiditySetter,
  temperatureSetter,
  windSpeedSetter,
} from './Helpers';

test('combineCityCountryName', () => {
  expect(
    combineCityCountryName({
      coord: {
        lon: 31.2497,
        lat: 30.0626,
      },
      weather: [
        {
          id: 701,
          main: 'Mist',
          description: 'mist',
          icon: '50n',
        },
      ],
      base: 'stations',
      main: {
        temp: 19.42,
        feels_like: 19.43,
        temp_min: 19.12,
        temp_max: 19.42,
        pressure: 1020,
        humidity: 77,
      },
      visibility: 4000,
      wind: {
        speed: 0,
        deg: 0,
      },
      clouds: {
        all: 0,
      },
      dt: 1668301039,
      sys: {
        type: 1,
        id: 2514,
        country: null,
        sunrise: 1668313104,
        sunset: 1668351617,
      },
      timezone: 7200,
      id: 360630,
      name: 'Cairo',
      cod: 200,
      createdAt: '13.11.2022. - 3:00',
    }),
  ).toBe('Cairo');
  expect(
    combineCityCountryName({
      coord: {
        lon: 31.2497,
        lat: 30.0626,
      },
      weather: [
        {
          id: 701,
          main: 'Mist',
          description: 'mist',
          icon: '50n',
        },
      ],
      base: 'stations',
      main: {
        temp: 19.42,
        feels_like: 19.43,
        temp_min: 19.12,
        temp_max: 19.42,
        pressure: 1020,
        humidity: 77,
      },
      visibility: 4000,
      wind: {
        speed: 0,
        deg: 0,
      },
      clouds: {
        all: 0,
      },
      dt: 1668301039,
      sys: {
        type: 1,
        id: 2514,
        country: 'EG',
        sunrise: 1668313104,
        sunset: 1668351617,
      },
      timezone: 7200,
      id: 360630,
      name: 'Cairo',
      cod: 200,
      createdAt: '13.11.2022. - 3:00',
    }),
  ).toBe('Cairo, EG');
});

test('humiditySetter', () => {
  expect(humiditySetter(0)).toBe('0%');
  expect(humiditySetter(100)).toBe('100%');
});

test('humiditySetter no value', () => {
  expect(humiditySetter(null)).toBe(null);
});

test('temperatureSetter', () => {
  expect(temperatureSetter(0)).toBe('0° C');
  expect(temperatureSetter(100)).toBe('100° C');
});

test('temperatureSetter no value', () => {
  expect(temperatureSetter(null)).toBe(null);
});

test('windSpeedSetter', () => {
  expect(windSpeedSetter(0)).toBe('0 km/h');
  expect(windSpeedSetter(100)).toBe('100 km/h');
});

test('windSpeedSetter no value', () => {
  expect(windSpeedSetter(null)).toBe(null);
});
