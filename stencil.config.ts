import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import tailwindcss from 'tailwindcss';

export const config: Config = {
  namespace: 'ot-components-stencil-ds',
  globalStyle: 'src/global/tailwind.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
  plugins: [
    postcss({
      plugins: [tailwindcss()],
    }),
  ],
};
