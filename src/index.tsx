import { dark, light } from 'src/theme';

import Navigation from './navigation';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Sentry from 'src/utils/Sentry';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@dooboo-ui/theme';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

Sentry.init({
  dsn: 'https://b16809462acd4869a2e6fb45fd24fd34@o439697.ingest.sentry.io/5406915',
  enableInExpoDevelopment: true,
  debug: true
});

export default function App(): React.ReactElement | null
{
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete)
  {
    return null;
  }
  else
  {
    return (
      <ThemeProvider customTheme={{ light, dark }}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </ThemeProvider>
    );
  }
}
