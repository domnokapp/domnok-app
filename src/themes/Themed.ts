import { Text as DefaultText, View as DefaultView, useColorScheme } from 'react-native';
import { AppColors } from './Colors';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function useCustomColorScheme() {
  const scheme = useColorScheme() || 'light';
  return scheme;
  // const { theme: userTheme } = useSelector(appSelector);

  // return userTheme && userTheme !== 'auto' ? userTheme : scheme;
}

export function useThemeColor() {
  const theme = useCustomColorScheme();

  return AppColors[theme];
}