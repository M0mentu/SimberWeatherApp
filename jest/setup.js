import * as axios from 'axios';

import 'react-native-gesture-handler/jestSetup';

jest.mock('axios');

jest.mock('@react-native-async-storage/async-storage', () => ({
  multiSet: jest.fn(() => {
    return new Promise((resolve, reject) => {
      resolve(null);
    });
  }),
  multiGet: jest.fn(() => {
    return new Promise((resolve, reject) => {
      resolve(null);
    });
  }),
  getItem: jest.fn(() => {
    return new Promise((resolve, reject) => {
      resolve(null);
    });
  }),
  setItem: jest.fn(() => {
    return new Promise((resolve, reject) => {
      resolve(null);
    });
  }),
  removeItem: jest.fn(() => {
    return new Promise((resolve, reject) => {
      resolve(null);
    });
  }),
}));
