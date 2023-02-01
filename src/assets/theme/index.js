import {DefaultTheme} from 'react-native-paper';

export const defaultTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#575DFB',
    secondary: '#abaefd',
    accent: '#FFFFFF',
    background: '#FFFFFF',
    text: '#202124',
    surface: '#f2f2f7',
    error: '#DC241F',
    // disabled: '#848EAA',
    placeholder: '#898989',
    backdrop: '#2B2F3C50',
  },
};
