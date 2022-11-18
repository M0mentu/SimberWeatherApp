import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  I18nManager,
  ImageStyle,
  Dimensions,
} from 'react-native';

interface IStyles {
  container: ViewStyle;
}

const styles = (): IStyles => {
  return {
    container: {},
  };
};

export default StyleSheet.create(styles);
