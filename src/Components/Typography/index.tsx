import React from 'react';
import styles from './styles';
import {
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters/extend';
import {useTheme} from 'native-base';
import {TypographyInterface} from 'Types';
import {Text} from 'react-native';

const Typography: React.FC<TypographyInterface> = props => {
  const theme = useTheme();

  const {colors} = theme;

  const styleSheet = styles(theme);

  const {ms, me, mt, mb, fs, fc, fw, children, style, variant} = props;

  return (
    <Text
      style={[
        styleSheet.baseStyle,
        variant == 'title' && styleSheet.titleVariant,
        variant == 'headerTitle' && styleSheet.headerTitleVariant,
        mt && {marginTop: moderateVerticalScale(mt)},
        mb && {marginBottom: moderateVerticalScale(mb)},
        ms && {marginStart: moderateScale(ms)},
        me && {marginEnd: moderateScale(me)},
        fs && {fontSize: moderateScale(fs)},
        fc && {color: fc},
        fw && {fontWeight: fw},
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default Typography;
