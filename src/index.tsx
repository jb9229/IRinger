import * as Notifications from 'expo-notifications';

import { dark, light } from 'src/theme';

import { ApolloProvider } from '@apollo/client';
import Navigation from './navigation';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Sentry from 'src/utils/Sentry';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@dooboo-ui/theme';
import { apolloClient } from 'apollo/index';
import { registerForPushNotificationsAsync } from './utils/NotificationAction';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

Sentry.init({
  dsn: 'https://b16809462acd4869a2e6fb45fd24fd34@o439697.ingest.sentry.io/5406915',
  enableInExpoDevelopment: true,
  debug: true
});

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
});

export default function App(): React.ReactElement | null
{
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const notificationListener = React.useRef();
  const responseListener = React.useRef();
  const [expoPushToken, setExpoPushToken] = React.useState<string>();
  const [notification, setNotification] = React.useState();

  React.useEffect(() =>
  {
    registerForPushNotificationsAsync().then((token) => token && setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener((notification) =>
    {
      console.log(notification);
      notification && setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) =>
    {
      console.log(response);
    });

    return () =>
    {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  if (!isLoadingComplete)
  {
    return null;
  }
  else
  {
    return (
      <ThemeProvider customTheme={{ light, dark }}>
        <ApolloProvider client={apolloClient}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </ApolloProvider>
      </ThemeProvider>
    );
  }
}
