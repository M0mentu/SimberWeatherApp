import {Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {citySearchCardInterface} from 'Types';
import {Box, useTheme, Pressable} from 'native-base';
import {Assets} from 'Assets';
import SvgView from 'SimpleWeather/SvgView';
import Typography from 'SimpleWeather/Typography';
import {combineCityCountryName} from 'src/Utils/Helpers';
import {FLAGS_URL} from 'src/Utils/Constants';

const CitySearchCard: React.FC<citySearchCardInterface> = props => {
  const Theme = useTheme();

  const styleSheet = styles(Theme);

  const {
    images: {
      common: {LocationCity},
    },
  } = Assets;

  const {item, onPress} = props;

  const name = combineCityCountryName(item);
  const countryName = item?.sys?.country;

  return (
    <Pressable onPress={onPress} style={styleSheet.container}>
      <Box style={styleSheet.iconNameContainer}>
        <SvgView svgFile={LocationCity} width={24} height={24} />
        <Typography ms={32} fw="900">
          {name}
        </Typography>
        {countryName && (
          <Image
            source={{
              uri: `${FLAGS_URL}${countryName?.toLowerCase()}.png`,
            }}
            style={styleSheet.countryFlag}
          />
        )}
      </Box>
    </Pressable>
  );
};

export default CitySearchCard;
