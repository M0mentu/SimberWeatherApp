import Toast from 'react-native-toast-message';

export const showErrorMessage = (message: string) => {
  Toast.show({
    type: 'error',
    text1: 'Oh no! something went wrong',
    text2: message,
    position: 'bottom',
  });
};

export const ShowSuccessMessage = (message: string) => {
  Toast.show({
    type: 'success',
    text1: 'Success',
    text2: message,
    position: 'bottom',
  });
};

export const ShowInfoMessage = (message: string) => {
  Toast.show({
    type: 'info',
    text1: '',
    text2: message,
    position: 'bottom',
  });
};
