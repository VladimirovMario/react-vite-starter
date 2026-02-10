import { loadEnv, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  const envPrefix = 'VITE_';
  const env = loadEnv(mode, process.cwd(), envPrefix);

  const config = {
    base: '/',
    plugins: [react()],
    clearScreen: false,
    envPrefix, // envPrefix should not be set as '', which will expose all your env variables and cause unexpected leaking of sensitive information
    server: {
      port: 3000,
      open: '/',
    },
  };

  if (mode !== 'production') {
    console.log('⚡ Vite Debug Info:');
    console.log('command', command);
    console.log('mode', mode);
    console.log('isSsrBuild', isSsrBuild);
    console.log('isPreview', isPreview);
    console.log('env', env);
  }

  return config;
});
