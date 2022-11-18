import {ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';
import {Box, Pressable, useTheme} from 'native-base';
import {vs, s} from 'react-native-size-matters/extend';
import Typography from 'SimpleWeather/Typography';
import {DefaultOverLayLoadingInterface} from 'Types';

const DefaultOverLayLoading: React.FC<
  DefaultOverLayLoadingInterface
> = props => {
  const {width, height, br, ms, me, onPress, style, message} = props;

  const Theme = useTheme();

  const {colors} = Theme;

  const styleSheet = styles(Theme);

  return (
    <Pressable
      onPress={onPress && onPress}
      style={[
        styleSheet.container,
        width && {width: vs(width)},
        height && {height: vs(height)},
        br && {borderRadius: br},
        ms && {marginStart: s(ms)},
        me && {marginEnd: s(me)},
        style,
      ]}>
      <Box
        style={[
          styleSheet.loadingContainer,
          message && styleSheet.withMessageContainer,
        ]}>
        {message && (
          <Typography style={styleSheet.messageStyle}>{message}</Typography>
        )}
        <Box>
          <ActivityIndicator size={'large'} color={colors.appPrimary} />
        </Box>
      </Box>
    </Pressable>
  );
};

export default DefaultOverLayLoading;
