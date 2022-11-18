import {
  View,
  FlatList,
  FlatListProps,
  ActivityIndicator,
  ViewStyle,
} from 'react-native';
import React, {forwardRef, useImperativeHandle} from 'react';
import styles from './styles';
import {useTheme} from 'native-base';
import {vs} from 'react-native-size-matters/extend';
import Typography from 'SimpleWeather/Typography';

interface DefaultFlatListInterface extends FlatListProps<{}> {
  flatListProps?: FlatListProps<{}>;
  isFetchingData?: boolean;
  horizontal?: boolean;
  style?: ViewStyle | ViewStyle[];
  optimized?: boolean;
  emptyString?: string | boolean;
  ref?: any;
  data: any;
  maxNumberOfItemsToRender?: number;
  seeMore?: {
    onPress: () => void;
    title: string;
    image?: string;
    localImage?: boolean;
  };
}

const DefaultFlatList: React.FC<DefaultFlatListInterface> = forwardRef(
  (props, ref) => {
    const initialRef: any = null;

    const simpleList = React.useRef(initialRef);

    const {
      isFetchingData,
      horizontal,
      style,
      optimized,
      emptyString,
      maxNumberOfItemsToRender,
      data,
      seeMore,
    } = props;

    const theme = useTheme();

    const styleSheet = styles(theme);

    const {colors} = theme;

    const renderLoadingContent = () => {
      return <ActivityIndicator size="large" color={colors.appPrimary} />;
    };

    const renderEmpty = () => {
      return emptyString ? (
        <Typography style={styleSheet.internetText}>{emptyString}</Typography>
      ) : null;
    };

    const renderLoadingMoreContent = () => {
      return (
        <View style={styleSheet.loadingMoreWrapper}>
          <ActivityIndicator size="small" color={colors.appPrimary} />
        </View>
      );
    };

    useImperativeHandle(ref, () => ({
      scrollToOffset: () => {
        if (simpleList.current)
          return simpleList.current.scrollToOffset({offset: 0, animated: true});

        return null;
      },
    }));

    const returnMAXDataToRender = () => {
      let maxDataToRender = [];
      if (data.length > 0 && maxNumberOfItemsToRender) {
        maxDataToRender = data.slice(0, maxNumberOfItemsToRender);
        seeMore && maxDataToRender.push(seeMore);
      } else {
        maxDataToRender = data;
        seeMore && maxDataToRender.push(seeMore);
      }
      return maxDataToRender;
    };

    const renderData = () => {
      let optimizations = optimized
        ? {
            removeClippedSubviews: true,
            initialNumToRender: 3, // Reduce initial render amount
            maxToRenderPerBatch: 2, // Reduce number in each render batch
            updateCellsBatchingPeriod: 100, // Increase time between renders
            windowSize: 21,
          }
        : {};
      return (
        <FlatList
          ref={simpleList}
          style={horizontal && {alignSelf: 'flex-start'}}
          contentContainerStyle={[
            data && data.length > 0 && styleSheet.flatListStyle,
            data && data.length > 0 && horizontal && {paddingBottom: vs(10)},
            style,
          ]}
          ListEmptyComponent={renderEmpty}
          keyExtractor={(item, index) => index.toString()}
          {...optimizations}
          {...props}
          data={data?.length > 0 ? returnMAXDataToRender() : []}
          showsHorizontalScrollIndicator={false}
        />
      );
    };

    return (
      <View style={styleSheet.container}>
        <View style={styleSheet.loadingContainer}>
          {data?.length === 0 && isFetchingData
            ? renderLoadingContent()
            : renderData()}
        </View>
        {!horizontal && data?.length !== 0 && isFetchingData && (
          <View style={styleSheet.loadingContainer}>
            {renderLoadingMoreContent()}
          </View>
        )}
      </View>
    );
  },
);
export default DefaultFlatList;
