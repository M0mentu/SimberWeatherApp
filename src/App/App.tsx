import React, {useRef} from 'react';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from 'src/Utils/Theme';
import AppStack from 'src/Navigation/AppStack';
import store from 'src/Redux/store';
import Toast from 'react-native-toast-message';

const App = () => {
  const ref = useRef();

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor={theme.colors.statusBar} />
          <NavigationContainer ref={ref}>{<AppStack />}</NavigationContainer>
          <Toast />
        </SafeAreaView>
      </NativeBaseProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
