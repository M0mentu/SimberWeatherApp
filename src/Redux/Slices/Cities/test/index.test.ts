import {configureStore} from '@reduxjs/toolkit';
import {dataSlice, postData} from './';
import {MyService} from './my-service';

describe('Test Cities Slice', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should post data fulfilled', async () => {
    jest
      .spyOn(MyService.prototype, 'postData')
      .mockResolvedValueOnce([]);
    const store = configureStore({reducer: dataSlice.reducer});
    await store.dispatch(postData({cities: []}));
    expect(store.getState()).toEqual({cities: []});
  });
});
