import React from 'react';
import {Box, useTheme, Pressable} from 'native-base';
import styles from './styles';
import {Assets} from 'Assets';
import Typography from '../Typography';
import SvgView from '../../Components/SvgView';
import {MainHeaderInterface} from 'Types';
import {useNavigation} from '@react-navigation/native';

const MainHeader: React.FC<MainHeaderInterface> = React.forwardRef(
  (props, ref) => {
    const theme = useTheme();

    const {colors} = theme;

    const {goBack} = useNavigation();

    const style = styles(theme);

    const styleSheet = styles(theme);

    const {hideBack, title} = props;
    const {
      images: {
        common: {BackArrow},
      },
    } = Assets;

    const renderBackArrow = () => {
      return (
        <Pressable
          style={styleSheet.iconStyle}
          hitSlop={{top: 5, bottom: 5, right: 5, left: 5}}
          onPress={goBack}>
          <SvgView svgFile={BackArrow} width={24} height={24} />
        </Pressable>
      );
    };

    const renderTitle = () => {
      return (
        <Box style={styleSheet.titleContainer}>
          <Typography variant="headerTitle">{title}</Typography>
        </Box>
      );
    };

    return (
      <Box style={style.headerContainer}>
        {!hideBack && renderBackArrow()}
        {title && renderTitle()}
      </Box>
    );
  },
);

export default MainHeader;
