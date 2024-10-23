import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { flatRoutes } from "remix-flat-routes";
import path from "path";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
      // Remix flat routes config
      ignoredRouteFiles: ["**/.*"],
      routes: async defineRoutes => flatRoutes("routes", defineRoutes),
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      // To prevent long relative imports in scss files
      "~/styles": path.resolve(__dirname, "./app/styles"),
    },
  },
});
