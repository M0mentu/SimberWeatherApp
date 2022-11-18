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
  container: ViewStyle;
  iconNameContainer: ViewStyle;
  modalContainer: ViewStyle;
  messageStyle: TextStyle;
  buttonsContainer: ViewStyle;
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
    modalContainer: {
      marginHorizontal: s(16),
      backgroundColor: colors.white,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: vs(4),
      },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 15,
      borderRadius: 20,
      paddingVertical: vs(16),
    },
    messageStyle: {
      textAlign: 'center',
      fontSize: moderateScale(14),
      fontWeight: '500',
      paddingHorizontal: s(16),
    },
    buttonsContainer: {
      marginTop: vs(16),
      paddingHorizontal: s(16),
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  };
};

export default StyleSheet.create(styles);
