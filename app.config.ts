import 'dotenv/config';
export default ({ config }): any =>
{
  return {
    ...config,
    version: process.env.MY_CUSTOM_PROJECT_VERSION || '0.0.0',
    slug: process.env.BUILD_TYPE === 'dev' ? 'iringer_dev'
      : process.env.BUILD_TYPE === 'story' ? 'iringer_story' : 'iringer_alpha',
    icon: process.env.BUILD_TYPE === 'story' ? './assets/images/storyIcon_32.png' : config.icon,
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
      buildType: process.env.BUILD_TYPE
    }
  };
};
