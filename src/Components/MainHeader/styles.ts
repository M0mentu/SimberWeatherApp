import {ICustomTheme} from 'native-base';
import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {s, vs, ScaledSheet} from 'react-native-size-matters/extend';

interface IStyles {
  headerContainer: ViewStyle;
  iconStyle: ViewStyle;
  titleStyle: TextStyle;
  titleContainer: ViewStyle;
}

const styles = (Theme: ICustomTheme): IStyles => {
  const {colors} = Theme;
  return {
    headerContainer: {
      width: '100%',
      height: vs(128),
      backgroundColor: colors.appPrimary,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: vs(4),
      },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 15,
    },
    iconStyle: {
      paddingTop: vs(17),
      marginStart: s(20),
    },
    titleStyle: {
      marginStart: s(72),
      marginTop: vs(40),
    },
    titleContainer: {flex: 1, justifyContent: 'flex-end'},
  };
};

export default StyleSheet.create(styles);
