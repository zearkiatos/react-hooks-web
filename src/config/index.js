const config = {
  ENVIRONMENT: process.env.REACT_APP_ENVIRONMENT,
  RICKANDMORTY_API_BASE_URL: process.env.REACT_APP_RICKANDMORTY_API_BASE_URL,
  FIREBASE: {
    API_KEY: process.env.FIREBASE_API_KEY,
    AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    APP_ID: process.env.FIREBASE_APP_ID
  }
};

export default config;
