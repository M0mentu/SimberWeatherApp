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
  container: ViewStyle;
  loadingContainer: ViewStyle;
  withMessageContainer: ViewStyle;
  messageStyle: TextStyle;
}

const styles = (Theme: ICustomTheme): IStyles => {
  const {colors} = Theme;

  return {
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: colors.overLayColor,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
    },
    loadingContainer: {
      width: s(100),
      height: vs(100),
      backgroundColor: colors.white,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    withMessageContainer: {
      width: s(200),
      height: vs(150),
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    messageStyle: {
      marginBottom: vs(20),
      fontSize: moderateScale(16),
    },
  };
};

export default StyleSheet.create(styles);
