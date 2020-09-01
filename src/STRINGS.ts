import * as Localization from 'expo-localization';

import en from 'assets/langs/en.json';
import i18n from 'i18n-js';
import ko from 'assets/langs/ko.json';

// Set the key-value pairs for the different languages you want to support.

i18n.fallbacks = true;
i18n.translations = { en, ko };
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

export const getString = (param: string, mapObj?: Record<string, unknown>): string =>
{
  if (mapObj)
  {
    return i18n.t(param, mapObj);
  }
  return i18n.t(param);
};
