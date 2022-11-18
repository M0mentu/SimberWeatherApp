import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CITIES_SCREEN_NAME,
  DETAILS_SCREEN_NAME,
  HISTORICAL_SCREEN_NAME,
} from 'src/Navigation/ScreenNames';
import Cities from 'src/Screens/Cities';
import Details from 'src/Screens/Details';
import History from 'src/Screens/History';
import {useTheme} from 'native-base';

const Stack = createNativeStackNavigator();

interface AppStackProps {}

// HeaderShown is false b
const AppStack = (props: AppStackProps) => {
  const {} = props;
  const theme = useTheme();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={CITIES_SCREEN_NAME} component={Cities} />
      <Stack.Screen name={DETAILS_SCREEN_NAME} component={Details} />
      <Stack.Screen name={HISTORICAL_SCREEN_NAME} component={History} />
    </Stack.Navigator>
  );
};

export default AppStack;
