import {useTheme, ICustomTheme, theme} from 'native-base';
import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import { vs } from 'react-native-size-matters/extend';

interface IStyles {
  container: ViewStyle;
  historyContainer: ViewStyle;
}

const styles = (Theme: ICustomTheme): IStyles => {
  const {colors} = Theme;
  return {
    container: {},
    historyContainer: {
      marginTop: vs(10),
    },
  };
};

export default StyleSheet.create(styles);
