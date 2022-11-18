import {ICustomTheme} from 'native-base';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {moderateScale, vs} from 'react-native-size-matters/extend';

interface IStyles {
  dateTimeCOntainer: ViewStyle;
  textStyle: TextStyle;
}

const styles = (Theme: ICustomTheme): IStyles => {
  const {colors} = Theme;
  return {
    dateTimeCOntainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingHorizontal: vs(8),
      marginBottom: vs(20),
    },
    textStyle: {
      textAlign: 'center',
      fontSize: moderateScale(12),
      color: colors.arsenic,
    },
  };
};

export default StyleSheet.create(styles);
