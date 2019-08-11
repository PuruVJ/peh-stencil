import { Config } from '@stencil/core';
import { sass } from "@stencil/sass";

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: {
        globPatterns: [
          '**/*.{js,css,json,html,ico,png,jpg,jpeg}'
        ]
      },
      baseUrl: 'https://purueyehospital.com/'
    }
  ],
  enableCache: false,
  plugins: [
    sass({
      includePaths: ['./node_modules']
    })
  ]
};
