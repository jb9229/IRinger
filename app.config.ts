import 'dotenv/config';

import { loadingStorybook } from './App';

export default ({ config }): any =>
{
  // console.log('>>> version: ', process.env.MY_CUSTOM_PROJECT_VERSION);
  return {
    ...config,
    version: process.env.MY_CUSTOM_PROJECT_VERSION || '0.0.0',
    slug: loadingStorybook ? 'iringer_story' : `${config.slug}_${process.env.BUILD_TYPE}`,
    icon: loadingStorybook ? './assets/images/storyIcon_32.png' : config.icon,
    hooks: {
      ...config.hooks,
      postPublish: [
        {
          file: 'sentry-expo/upload-sourcemaps',
          config: {
            organization: 'ShinsungTK',
            project: 'iringer',
            authToken: process.env.SENTRY_AUTHTOKEN
          }
        }
      ]
    },
    // All values in extra will be passed to your app.
    extra: {
      fact: 'kittens are cool'
    }
  };
};
