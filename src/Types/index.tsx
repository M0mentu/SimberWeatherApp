import {TextProps} from 'react-native';
import {TextStyle, ViewStyle} from 'react-native';
import {ActionSheetRef} from 'react-native-actions-sheet';

export interface TypographyInterface extends TextProps {
  style?: ViewStyle | ViewStyle[] | TextStyle | TextStyle[];
  ms?: number;
  me?: number;
  mt?: number;
  mb?: number;
  fs?: number;
  fc?: string;
  fw?:
    | 'bold'
    | '400'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  children: any;
  variant?: 'title' | 'headerTitle';
}

export interface MainViewInterface extends MainHeaderInterface {
  style?: ViewStyle;
  children: React.ReactNode;
}

export interface svgViewInterface {
  style?: ViewStyle | ViewStyle[];
  svgFile?: any;
  width?: number;
  height?: number;
  br?: number;
  ms?: number;
  me?: number;
  onPress?: () => void;
  RTLSupport?: boolean;
  fill?: string;
}

export interface MainHeaderInterface {
  hideBack?: boolean;
  title?: string;
}

export interface DefaultOverLayLoadingInterface {
  style?: ViewStyle;
  width?: number;
  height?: number;
  br?: number;
  ms?: number;
  me?: number;
  onPress?: () => void;
  message?: string;
}

export interface weatherItem {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
  createdAt?: string;
  historyData?: weatherItem[];
}

export interface weatherItemCardInterface {
  onPress?: () => void;
  index: number;
  item: weatherItem;
}

export interface CityHistoryCardInterface {
  onPress?: () => void;
  index?: number;
  item: weatherItem;
}
export interface citySearchCardInterface {
  onPress: () => void;
  item: weatherItem;
}

export interface citySearchInterface {
  onPress: (cityName: string) => void;
  ref: any;
}

export interface weatherDetailsCardInterface {
  item: weatherItem;
}

export interface DefaultButtonInterface {
  titleStyle?: TextStyle;
  title?: string | React.FC;
  buttonStyle?: ViewStyle;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
  variant?: 'secondary' | 'pending' | 'addCity' | 'confirmDelete';
  mt?: number;
  fullWidth?: boolean;
  showPlus?: boolean;
}
