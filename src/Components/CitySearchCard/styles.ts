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
  container: ViewStyle;
  iconNameContainer: ViewStyle;
  countryFlag: ImageStyle;
}

const styles = (Theme: ICustomTheme): IStyles => {
  const {colors} = Theme;
  return {
    container: {
      flexDirection: 'row',
      width: '100%',
      height: vs(56),
      paddingHorizontal: s(16),
      paddingVertical: vs(16),
    },
    iconNameContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    countryFlag: {
      width: s(14),
      height: vs(14),
      marginStart:s(16)
    },
  };
};

export default StyleSheet.create(styles);
