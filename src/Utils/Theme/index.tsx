import {extendTheme} from 'native-base';
// 2. Extend the theme to include custom colors, fonts, etc

const customTheme = extendTheme({
  colors: {
    appPrimary: '#2388C7',
    statusBar: '#1E7AB1',
    gradientColors: ['#FFFFFF', '#D6D3DE'],
    overLayColor: 'rgba(0,0,0,0.5)',
    arsenic: '#3D4548 ',
  },
  hitSlopValues: {top: 5, bottom: 5, left: 5, right: 5},
  components: {},
});

type CustomThemeType = typeof customTheme;
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
export const theme = customTheme;
