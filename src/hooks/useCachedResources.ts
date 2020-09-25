import * as Font from 'expo-font';
import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Updates from 'expo-updates';

import { Ionicons } from '@expo/vector-icons';

export default function useCachedResources(): Array<boolean>
{
  const [isResourceLoadingComplete, setResourceLoadingComplete] = React.useState(false);
  const [isCheckUpdateComplete, setCheckUpdateComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() =>
  {
    checkUpdate()
      .then(() =>
      {
        setCheckUpdateComplete(true);
        loadResourcesAndDataAsync()
          .then(() =>
          {
            setResourceLoadingComplete(true);
          });
      });
  }, []);

  return [isResourceLoadingComplete, isCheckUpdateComplete];
}

export async function loadResourcesAndDataAsync(): Promise<boolean>
{
  try
  {
    SplashScreen.preventAutoHideAsync();

    // Load fonts
    await Font.loadAsync({
      ...Ionicons.font,
      'space-mono': require('assets/fonts/SpaceMono-Regular.ttf'),
      'nanumsquare-roundR': require('assets/fonts/NanumSquareRoundR.ttf'),
      'nanumbarun-gothic': require('assets/fonts/NanumBarunGothic.ttf'),
      'nanumbarun-gothic-b': require('assets/fonts/NanumBarunGothic.ttf'),
      'nanum-pen': require('assets/fonts/NanumPen.ttf')
    });

    return true;
  }
  catch (e)
  {
    // We might want to provide this error information to an error reporting service
    console.warn(e);
    return false;
  }
  finally
  {
    SplashScreen.hideAsync();
  }
}

export async function checkUpdate(): Promise<boolean>
{
  try
  {
    const update = await Updates.checkForUpdateAsync();

    if (update.isAvailable)
    {
      console.log('=== update available:', update);
      await Updates.fetchUpdateAsync();
      // ... notify user of update ...
      await Updates.reloadAsync();
      return true;
    }

    return true;
  }
  catch (e)
  {
    return true;
  }
}
