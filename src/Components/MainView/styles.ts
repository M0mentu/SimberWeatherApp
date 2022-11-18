import {ICustomTheme} from 'native-base';
import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  I18nManager,
  ImageStyle,
  Dimensions,
} from 'react-native';
import {ScaledSheet, vs} from 'react-native-size-matters/extend';

interface IStyles {
  container: ViewStyle;
  imageStyle: ImageStyle;
}

const styles = (Theme: ICustomTheme): IStyles => {
  const {colors} = Theme;
  return {
    container: {
      flex: 1,
    },
    imageStyle: {
      width: '100%',
      height: vs(360),
      backgroundColor: 'transparent',
      position: 'absolute',
      bottom: 0,
      zIndex: -1,
    },
  };
};

export default StyleSheet.create(styles);
