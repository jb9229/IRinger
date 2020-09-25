import { dark, light } from 'src/theme';

import ActIndicator from './components/molecules/ActIndicator';
import { ApolloProvider } from '@apollo/client';
import Navigation from './navigation';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Sentry from 'src/utils/Sentry';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@dooboo-ui/theme';
import { apolloClient } from 'apollo/index';
import { getString } from './STRINGS';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

Sentry.init({
  dsn: 'https://b16809462acd4869a2e6fb45fd24fd34@o439697.ingest.sentry.io/5406915',
  enableInExpoDevelopment: true,
  debug: true
});

export default function App(): React.ReactElement | null
{
  const [isResourceLoadingComplete, isCheckUpdateComplete] = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isResourceLoadingComplete || !isCheckUpdateComplete)
  {
    if (!isResourceLoadingComplete)
    {
      return <ActIndicator msg={getString('loading.resouce')} color="rgb(58,139,255)" />;
    }
    if (!isCheckUpdateComplete)
    {
      return <ActIndicator msg={getString('loading.app_update')} color="rgb(58,139,255)" />;
    }
    return null;
  }
  else
  {
    return (
      <RecoilRoot>
        <ThemeProvider customTheme={{ light, dark }}>
          <ApolloProvider client={apolloClient}>
            <SafeAreaProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </SafeAreaProvider>
          </ApolloProvider>
        </ThemeProvider>
      </RecoilRoot>
    );
  }
}
