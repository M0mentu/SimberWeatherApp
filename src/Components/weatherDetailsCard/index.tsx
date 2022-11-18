import {ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';
import {Box, Image, useTheme} from 'native-base';
import Typography from 'SimpleWeather/Typography';
import {weatherDetailsCardInterface} from 'Types';
import {IMAGE_URL} from 'src/Utils/Constants';
import {
  combineCityCountryName,
  humiditySetter,
  temperatureSetter,
  windSpeedSetter,
} from 'src/Utils/Helpers';

const WeatherDetailsCard: React.FC<weatherDetailsCardInterface> = props => {
  const {item} = props;

  const Theme = useTheme();

  const {colors} = Theme;

  const styleSheet = styles(Theme);

  const name = item && combineCityCountryName(item);

  const [imageLoading, setImageLoading] = React.useState(false);

  const renderRow = (title: string, value: string) => {
    return value ? (
      <Box style={styleSheet.rowContainer}>
        <Typography fw="900">{title}</Typography>
        <Typography
          adjustsFontSizeToFit
          fc={colors.appPrimary}
          fw="500"
          fs={20}>
          {value}
        </Typography>
      </Box>
    ) : null;
  };
  const renderContent = () => {
    return (
      <Box style={styleSheet.container}>
        <Typography mt={26} variant="title">
          {name}
        </Typography>

        <Image
          alt="weather image"
          source={{
            uri: `${IMAGE_URL}${item?.weather[0]?.icon}@4x.png`,
          }}
          onLoadStart={() => setImageLoading(true)}
          onLoadEnd={() => setImageLoading(false)}
          style={styleSheet.weatherImage}
        />
        {imageLoading && (
          <ActivityIndicator
            size={'large'}
            color={colors.appPrimary}
            style={styleSheet.imageLoading}
          />
        )}
        <Box style={styleSheet.rowsContainer}>
          {item?.weather &&
            renderRow('Description', item?.weather[0]?.description)}
          {renderRow('Temperature', temperatureSetter(item?.main?.temp))}
          {renderRow('Humidity', humiditySetter(item?.main?.humidity))}
          {renderRow('Windspeed', windSpeedSetter(item?.wind?.speed))}
        </Box>
      </Box>
    );
  };
  return item ? (
    renderContent()
  ) : (
    <ActivityIndicator size={'large'} color={colors.appPrimary} />
  );
};

export default WeatherDetailsCard;
