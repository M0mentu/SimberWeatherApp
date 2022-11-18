import React from 'react';
import {useTheme} from 'native-base';
import styles from './styles';
import {HISTORICAL_SCREEN_NAME} from 'src/Navigation/ScreenNames';
import MainView from 'src/Components/MainView';
import {useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {weatherItem} from 'Types';
import DefaultFlatList from 'src/Components/DefaultFlatList';
import CityHistoryCard from 'src/Components/CityHistoryCard';

type Props = {};

const History = (props: Props) => {
  const Theme = useTheme();

  const styleSheet = styles(Theme);

  const route = useRoute() as {params: {item: weatherItem}};

  const item = route?.params?.item;

  const renderHistoryCard = ({item, index}) => {
    return <CityHistoryCard item={item} />;
  };

  const historyList = () => {
    return (
      <DefaultFlatList
        contentContainerStyle={styleSheet.historyContainer}
        data={item?.historyData}
        renderItem={renderHistoryCard}
        emptyString={'No history found'}
      />
    );
  };
  return (
    <MainView title={item?.name + ' ' + HISTORICAL_SCREEN_NAME}>
      {historyList()}
    </MainView>
  );
};

export default History;
