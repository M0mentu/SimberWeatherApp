import React from 'react';
import styles from './styles';
import {Box, Button, useTheme} from 'native-base';
import {vs} from 'react-native-size-matters/extend';
import Typography from 'SimpleWeather/Typography';
import SvgView from 'SimpleWeather/SvgView';
import {Assets} from 'Assets';
import {DefaultButtonInterface} from 'Types';

const DefaultButton: React.FC<DefaultButtonInterface> = props => {
  const {
    titleStyle,
    title,
    buttonStyle,
    loading,
    disabled,
    variant,
    onPress,
    mt,
    showPlus,
    fullWidth,
    ...buttonProps
  } = props;

  const Theme = useTheme();

  const {colors} = Theme;

  const styleSheet = styles(Theme);

  const {
    images: {
      common: {PlusIcon},
    },
  } = Assets;

  return (
    <Button
      onPress={!loading && onPress}
      style={[
        styleSheet.buttonStyle,
        disabled && {backgroundColor: colors.gray[500]},
        mt && {marginTop: vs(mt)},
        fullWidth && {width: '100%'},
        variant == 'addCity' && styleSheet.addCityButton,
        variant == 'confirmDelete' && styleSheet.confirmDelete,

        buttonStyle,
      ]}
      {...buttonProps}
      disabled={disabled}>
      <Box style={styleSheet.titleIconContainer}>
        {showPlus && <SvgView svgFile={PlusIcon} width={18} height={21} />}
        <Typography style={[styleSheet.titleStyle, titleStyle]}>
          {title}
        </Typography>
      </Box>
    </Button>
  );
};

export default DefaultButton;
