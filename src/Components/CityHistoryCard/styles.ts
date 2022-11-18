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
  weatherImage: ImageStyle;
  imageLoading: ViewStyle;
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
    imageLoading: {
      position: 'absolute',
      top: vs(0),
    },
    weatherImage: {
      width: s(30),
      height: vs(24),
    },
  };
};

export default StyleSheet.create(styles);
