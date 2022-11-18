import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {ICustomTheme} from 'native-base';
import {moderateScale} from 'react-native-size-matters/extend';

interface IStyles {
  flatListStyle: ViewStyle;
  container: ViewStyle;
  loadingContainer: ViewStyle;
  internetText: TextStyle;
  loadingMoreWrapper: ViewStyle;
}
const styles = (Theme: ICustomTheme): IStyles => {
  const {colors} = Theme;

  return {
    container: {
      flex: 1,
    },
    flatListStyle: {},
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    internetText: {
      textAlign: 'center',
      color: colors.gray['500'],
      fontSize: moderateScale(16),
      marginTop: moderateScale(20),
    },
    loadingMoreWrapper: {
      alignItems: 'center',
    },
  };
};

export default StyleSheet.create(styles);
