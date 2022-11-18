import {ICustomTheme} from 'native-base';
import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  I18nManager,
  ImageStyle,
  Dimensions,
} from 'react-native';
import {s, vs} from 'react-native-size-matters/extend';

interface IStyles {
  addCityInputContainer: ViewStyle;
  inputButtons: ViewStyle;
  inputStyle: ViewStyle;
}

const styles = (Theme: ICustomTheme): IStyles => {
  const {colors} = Theme;
  return {
    addCityInputContainer: {
      width: '100%',
      height: vs(350),
      paddingTop: vs(16),
      justifyContent: 'center',
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
