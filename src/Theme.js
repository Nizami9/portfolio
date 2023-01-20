import { extendTheme } from '@chakra-ui/react';

// config theme to useSysstemColorMode
const config = {
  initialColorMode: 'system',
  useSystemColorMode: false,
};
const theme = extendTheme({ config });

export default theme;