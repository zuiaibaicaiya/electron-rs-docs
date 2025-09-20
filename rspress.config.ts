import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  outDir: './public',
  root: path.join(__dirname, 'docs'),
  title: 'electron-rs',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/zuiaibaicaiya/create-electron-rs.git',
      },
    ],
  },
});
