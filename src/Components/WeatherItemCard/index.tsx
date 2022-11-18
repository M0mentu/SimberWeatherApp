import {Modal} from 'react-native';
import React from 'react';
import styles from './styles';
import {weatherItemCardInterface} from 'Types';
import {Box, useTheme, Pressable} from 'native-base';
import {Assets} from 'Assets';
import SvgView from 'SimpleWeather/SvgView';
import Typography from 'SimpleWeather/Typography';
import {useNavigation} from '@react-navigation/native';
import {
  DETAILS_SCREEN_NAME,
  HISTORICAL_SCREEN_NAME,
} from 'src/Navigation/ScreenNames';
import DefaultButton from '../DefaultButton';
import {combineCityCountryName} from 'src/Utils/Helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SAVED_CITIES_STORAGE_KEY} from '../../Utils/Constants';
import {useDispatch} from 'react-redux';
import {setCities} from 'src/Redux/Slices/Cities';
import {ShowSuccessMessage} from 'src/Utils/ AlertMessage';
const WeatherItemCard: React.FC<weatherItemCardInterface> = props => {
  const Theme = useTheme();

  const styleSheet = styles(Theme);

  const {navigate} = useNavigation();

  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  const [itemToDelete, setItemToDelete] = React.useState<number>(null);

  const dispatch = useDispatch();

  const {item, onPress, index} = props;

  const {
    images: {
      common: {LocationCity, Info, Delete},
    },
  } = Assets;

  const onDeleteItem = async () => {
    let savedCities;
    let afterFilter = [];
    try {
      await AsyncStorage.getItem(SAVED_CITIES_STORAGE_KEY, (err, item) => {
        if (err) {
        } else {
          if (item !== null) {
            savedCities = JSON.parse(item);
            afterFilter = savedCities.filter(
              (item, index) => index !== itemToDelete,
            );
            dispatch(setCities({cities: afterFilter}));
            afterFilter.length == 0
              ? AsyncStorage.removeItem(SAVED_CITIES_STORAGE_KEY)
              : AsyncStorage.setItem(
                  SAVED_CITIES_STORAGE_KEY,
                  JSON.stringify(afterFilter),
                );
            ShowSuccessMessage('City Deleted Successfully');
          }
        }
      });
    } catch (e) {
      console.log("[ERROR] can't delete item", e);
    } finally {
      setModalVisible(false);
      setItemToDelete(null);
    }
  };

  const onCloseModal = () => {
    setModalVisible(false);
    setItemToDelete(null);
  };

  const renderDeleteModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onCloseModal}>
        <Pressable
          onPress={onCloseModal}
          backgroundColor={Theme.colors.overLayColor}
          flex={1}
          justifyContent="center">
          <Box style={styleSheet.modalContainer}>
            <Typography style={styleSheet.messageStyle}>
              Are you sure you want to delete {combineCityCountryName(item)}
            </Typography>
            <Box style={styleSheet.buttonsContainer}>
              <DefaultButton
                variant="confirmDelete"
                title={'Delete'}
                onPress={onDeleteItem}
              />
              <DefaultButton title={'Cancel'} onPress={onCloseModal} />
            </Box>
          </Box>
        </Pressable>
      </Modal>
    );
  };

  return (
    <Pressable
      onPress={() =>
        navigate(DETAILS_SCREEN_NAME as never, {item, index} as never)
      }
      style={styleSheet.container}>
      <Box style={styleSheet.iconNameContainer}>
        <SvgView svgFile={LocationCity} width={24} height={24} />
        <Typography ms={32} fw="900">
          {combineCityCountryName(item)}
        </Typography>
      </Box>
      <Pressable
        hitSlop={Theme.hitSlopValues}
        onPress={() => {
          setModalVisible(true);
          setItemToDelete(index);
        }}>
        <SvgView svgFile={Delete} width={24} height={24} me={16} />
      </Pressable>
      <Pressable
        hitSlop={Theme.hitSlopValues}
        onPress={() =>
          navigate(HISTORICAL_SCREEN_NAME as never, {item} as never)
        }>
        <SvgView svgFile={Info} width={24} height={24} />
      </Pressable>
      {renderDeleteModal()}
    </Pressable>
  );
};

export default WeatherItemCard;
