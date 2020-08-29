import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: "src/global/app.scss",
  globalScript: "src/global/app.ts",
  outputTargets: [
    {
      type: "www",
      // comment the following line to disable service workers in production
      serviceWorker: {
        swSrc: "./src/sw.js",
      },
      baseUrl: "https://purueyehospital.com/",
      prerenderConfig: "./prerender.config.ts",
    },
  ],
  enableCache: false,
  plugins: [
    sass({
      includePaths: ["./node_modules"],
    }),
  ],
  buildEs5: false,
  extras: {
    appendChildSlotFix: false,
    cloneNodeFix: false,
    cssVarsShim: false,
    dynamicImportShim: false,
    lifecycleDOMEvents: false,
    safari10: false,
    scriptDataOpts: false,
    shadowDomShim: false,
    slotChildNodesFix: false,
  },
};
