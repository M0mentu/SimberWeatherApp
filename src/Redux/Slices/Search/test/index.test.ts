import {configureStore} from '@reduxjs/toolkit';
import {dataSlice, postData} from './';
import {MyService} from './my-service';

describe('Test History Slice', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should post data fulfilled', async () => {
    jest
      .spyOn(MyService.prototype, 'postData')
      .mockResolvedValueOnce([]);
    const store = configureStore({reducer: dataSlice.reducer});
    await store.dispatch(postData({citiesSearch: []}));
    expect(store.getState()).toEqual({citiesSearch: []});
  });
});
