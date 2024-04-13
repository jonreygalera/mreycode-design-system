const envConfig = Object.freeze({
  APP_ENV: import.meta.env.VITE_APP_ENV,
  APP_NAME: import.meta.env.VITE_APP_NAME,
  APP_URL: import.meta.env.VITE_APP_URL,
});

export const env = (key, defaultValue = null) => envConfig[key] ?? defaultValue;
export default envConfig;
