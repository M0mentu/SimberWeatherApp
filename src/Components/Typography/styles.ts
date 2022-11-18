import {ICustomTheme} from 'native-base';
import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  I18nManager,
  ImageStyle,
  Dimensions,
} from 'react-native';
import {moderateScale, s, vs} from 'react-native-size-matters/extend';

interface IStyles {
  baseStyle: TextStyle;
  titleVariant: TextStyle;
  headerTitleVariant: TextStyle;
}

const styles = (Theme: ICustomTheme): IStyles => {
  const {colors} = Theme;
  return {
    baseStyle: {
      fontSize: moderateScale(14),
      color: colors.black,
    },
    titleVariant: {
      fontWeight: '400',
      color: colors.black,
      fontSize: moderateScale(24),
    },
    headerTitleVariant: {
      fontWeight: 'bold',
      color: colors.white,
      fontSize: moderateScale(24),
      marginStart: s(72),
      marginBottom: vs(22),
    },
  };
};

export default StyleSheet.create(styles);
