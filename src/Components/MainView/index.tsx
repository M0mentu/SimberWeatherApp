import React from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Assets} from 'Assets';
import {useTheme} from 'native-base';
import {MainViewInterface} from 'Types';
import MainHeader from '../MainHeader';
import {Image} from 'react-native';

const MainView: React.FC<MainViewInterface> = props => {
  const theme = useTheme();
  const {colors} = theme;
  const styleSheet = styles(theme);
  const {style, hideBack, children} = props;
  const {
    images: {
      common: {BackGroundImage},
    },
  } = Assets;

  const renderBackGroundImage = () => {
    return <Image source={BackGroundImage} style={styleSheet.imageStyle} />;
  };

  return (
    <LinearGradient
      colors={[...colors.gradientColors]}
      style={[styleSheet.container, style]}>
      <MainHeader {...props} />
      {children}
      {renderBackGroundImage()}
    </LinearGradient>
  );
};

export default MainView;
