import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@mfe/auth",
  app: () => System.import<LifeCycles>("@mfe/auth"),
  activeWhen: ["/auth"],
});

registerApplication({
  name: "@mfe/buildings",
  app: () => System.import<LifeCycles>("@mfe/buildings"),
  activeWhen: ["/buildings"],
});

start({
  urlRerouteOnly: true,
});
