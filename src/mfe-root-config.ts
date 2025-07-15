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

registerApplication({
  name: "@mfe/dashboards",
  app: () => System.import<LifeCycles>("@mfe/dashboards"),
  activeWhen: ["/dashboards"],
});

registerApplication({
  name: "@mfe/navbar",
  app: () => System.import<LifeCycles>("@mfe/navbar"),
  activeWhen: (location) => !location.pathname.startsWith("/auth"),
});

start({
  urlRerouteOnly: true,
});
