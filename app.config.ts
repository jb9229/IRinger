import 'dotenv/config';

export default ({ config }): any =>
{
  console.log(config);
  return {
    ...config,
    version: process.env.MY_CUSTOM_PROJECT_VERSION || '0.0.0',
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
