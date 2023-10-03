import { ExpoConfig } from 'expo/config';

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config = {
  name: 'travelholic',
  slug: 'travelholic',
  expo: {
    extra: {
      eas: {
        projectId: 'ed7aa13f-e1e9-4112-a7de-50e811d33a72',
      },
    },
    owner: 'travelholic',
  },
};

export default config;
