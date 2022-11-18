import {useTheme, ICustomTheme, theme} from 'native-base';
import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import {s, vs} from 'react-native-size-matters/extend';

interface IStyles {
  container: ViewStyle;
  citiesContainer: ViewStyle;
  addButtonContainer: ViewStyle;
  addCityInputContainer: ViewStyle;
  inputButtons: ViewStyle;
  inputStyle: ViewStyle;
}

const styles = (Theme: ICustomTheme): IStyles => {
  const {colors} = Theme;
  return {
    container: {},
    citiesContainer: {
      marginTop: vs(10),
      paddingBottom: vs(90),
    },
    addButtonContainer: {
      position: 'absolute',
      bottom: vs(16),
      right: s(16),
    },
    addCityInputContainer: {
      width: '100%',
      height: vs(350),
      paddingTop: vs(16),
    },
    inputButtons: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingVertical: vs(16),
    },
    inputStyle: {
      borderRadius: 20,
    },
  };
};

export default StyleSheet.create(styles);
