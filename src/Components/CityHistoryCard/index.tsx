import {ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';
import {CityHistoryCardInterface} from 'Types';
import {Box, useTheme, Pressable, Image} from 'native-base';
import Typography from 'SimpleWeather/Typography';
import {useNavigation} from '@react-navigation/native';
import {DETAILS_SCREEN_NAME} from 'src/Navigation/ScreenNames';
import {temperatureSetter} from 'src/Utils/Helpers';
import {IMAGE_URL} from '../../Utils/Constants';

const CityHistoryCard: React.FC<CityHistoryCardInterface> = props => {
  const Theme = useTheme();

  const {colors} = Theme;

  const styleSheet = styles(Theme);

  const {navigate} = useNavigation();

  const [imageLoading, setImageLoading] = React.useState<boolean>(true);

  const {item, index} = props;

  return (
    <Pressable
      onPress={() =>
        navigate(
          DETAILS_SCREEN_NAME as never,
          {item, index, fromHistory: true} as never,
        )
      }
      style={styleSheet.container}>
      <Box style={styleSheet.iconNameContainer}>
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
            color={colors.appPrimary}
            style={styleSheet.imageLoading}
          />
        )}
        <Box>
          <Typography ms={21} fs={12} mb={4} fw="400">
            {item?.createdAt}
          </Typography>
          <Typography ms={21} fw="900">
            {item?.weather[0]?.description},{' '}
            {temperatureSetter(item?.main?.temp)}
          </Typography>
        </Box>
      </Box>
    </Pressable>
  );
};

export default CityHistoryCard;
