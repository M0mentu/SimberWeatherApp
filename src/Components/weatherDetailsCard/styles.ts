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
  weatherImage: ImageStyle;
  rowContainer: ViewStyle;
  imageLoading: ViewStyle;
  rowsContainer: ViewStyle;
}

const styles = (Theme: ICustomTheme): IStyles => {
  const {colors} = Theme;

  return {
    container: {
      width: s(296),
      alignItems: 'center',
      alignSelf: 'center',
      position: 'absolute',
      top: vs(83),
      borderRadius: 4,
      backgroundColor: colors.white,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: vs(20),
      },
      shadowOpacity: 0.2,
      shadowRadius: 30,
      elevation: 15,
    },
    weatherImage: {
      width: s(94),
      height: vs(77),
      marginTop: vs(68),
      marginBottom: vs(76),
    },
    rowContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: s(32),
      marginTop: vs(7),
    },
    imageLoading: {
      position: 'absolute',
      top: vs(160),
    },
    rowsContainer: {
      width: '100%',
      marginBottom: vs(30),
      justifyContent: 'center',
    },
  };
};

export default StyleSheet.create(styles);
