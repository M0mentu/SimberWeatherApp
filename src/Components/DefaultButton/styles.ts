import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  I18nManager,
  ImageStyle,
  Dimensions,
} from 'react-native';
import {ICustomTheme} from 'native-base';
import {moderateScale, s, vs} from 'react-native-size-matters/extend';

interface IStyles {
  addCityButton: ViewStyle;
  titleStyle: TextStyle;
  titleIconContainer: ViewStyle;
  confirmDelete: ViewStyle;
  buttonStyle: ViewStyle;
}

const styles = (Theme: ICustomTheme): IStyles => {
  const {colors} = Theme;

  return {
    buttonStyle: {
      width: s(100),
      borderRadius: 28,
      backgroundColor: colors.appPrimary,
    },
    addCityButton: {
      width: s(137),
      height: vs(56),
      backgroundColor: colors.appPrimary,
    },
    confirmDelete: {
      height: vs(56),
      backgroundColor: colors.danger['500'],
    },
    titleStyle: {
      fontSize: moderateScale(14),
      color: colors.white,
      fontWeight: '900',
      letterSpacing: 1.35,
    },
    titleIconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
    },
  };
};

export default StyleSheet.create(styles);
