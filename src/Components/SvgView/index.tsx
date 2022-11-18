import {View, Pressable, I18nManager} from 'react-native';
import React from 'react';
import styles from './styles';
import {s, vs, moderateScale} from 'react-native-size-matters/extend';
import {svgViewInterface} from 'Types';

const SvgView: React.FC<svgViewInterface> = props => {
  const styleSheet = styles();
  
  const {svgFile, width, height, br, ms, me, RTLSupport, onPress, style} =
    props;

  return onPress ? (
    <Pressable
      onPress={onPress && onPress}
      style={[
        styleSheet.container,
        width && {width: moderateScale(width)},
        height && {height: moderateScale(height)},
        br && {borderRadius: br},
        ms && {marginStart: moderateScale(ms)},
        me && {marginEnd: moderateScale(me)},
        style,
      ]}>
      <props.svgFile
        svgFile={svgFile}
        {...props}
        width={s(width)}
        height={vs(height)}
      />
    </Pressable>
  ) : (
    <View
      style={[
        styleSheet.container,
        width && {width: moderateScale(width)},
        height && {height: moderateScale(height)},
        br && {borderRadius: br},
        ms && {marginStart: moderateScale(ms)},
        me && {marginEnd: moderateScale(me)},
        RTLSupport && {
          transform: [
            {
              rotateY: I18nManager.isRTL ? '180deg' : '0deg',
            },
          ],
        },

        style,
      ]}>
      <props.svgFile
        svgFile={svgFile}
        {...props}
        width={moderateScale(width)}
        height={moderateScale(height)}
      />
    </View>
  );
};

export default SvgView;
