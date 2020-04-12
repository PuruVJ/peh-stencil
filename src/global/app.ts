import { Build } from "@stencil/core";

if (!Build.isDev) {
  console.log = null;
  console.error = () => {};
  console.warn = null;
}
