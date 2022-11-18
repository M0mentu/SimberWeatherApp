# Welcome to Simple Weather App.

## Insights

- The app was written in TypeScript.
- All given icons were converted to SVG to ensure best quality.
- The app theme colors can be found in `src/Utils/Theme`.
- The app assets can be found in `src/Assets/`
- Fonts were implemented in android native to ensure all the font weights corresponds correctly in react native they can be found in `android/app/src/main/res/font`,same on ios.
- All my custom Components are in `src/Components`
- the Types can be found in `src/Types`
- Redux is used to handle getting weather for a city in `src/Redux/Sagas/Cities` & `src/Redux/Slices/Cities`, and in searching for cities in `src/Redux/Sagas/Search` & `src/Redux/Slices/Search`
- the Navigation contains a stack navigator which has the 3 screens used (Details,History,Cities).
- the URLS can be found in `src/Utils/Constants.ts` 

## Prerequisites

- [Node.js](https://nodejs.org) and npm
- [Watchman](https://facebook.github.io/watchman)
- [Xcode](https://developer.apple.com/xcode)
- [Cocoapods](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [Redux-toolkit](https://redux-toolkit.js.org/) for state management.
- [Redux-saga](https://redux-saga.js.org/) redux side effect manager.
- [react-native-async-storage](https://github.com/react-native-async-storage/async-storage#readme) for storing data
- [native-base](https://nativebase.io/) for better and faster component making
- [native-base](https://nativebase.io/) for better and faster component making
- [react-native-size-matters](https://github.com/nirsky/react-native-size-matters) for handling dimensions, react-native-size-matters/extended is used because i changed default guideline sizes to match the given design.
- [react-native-svg](https://github.com/software-mansion/react-native-svg) for viewing SVG
- [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer#readme) transforming SVG to usable react component
- [reactotron-react-native](https://github.com/infinitered/reactotron-react-native) for better debugging and monitoring API calls and logs
- [reactotron-redux-saga](https://github.com/infinitered/reactotron-redux-saga)A reactotron plugin to provide insights into redux-saga, enables reactotron to view saga changes

## To run the app using scripts from console

- `npm install --legacy-peer-deps` to install node modules
- `cd ios && pod install && cd ..`
- `npm run android` to run on android
- `npm run ios` to run on ios
- `npm test` to run app tests

