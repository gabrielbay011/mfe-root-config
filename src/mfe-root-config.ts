import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@mfe/sys-flow",
  app: () => System.import<LifeCycles>("@mfe/sys-flow"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
