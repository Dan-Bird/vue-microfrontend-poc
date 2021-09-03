import { registerApplication, start } from "single-spa";
import * as isActive from './activity-functions'

registerApplication({
  name: "demo-nav",
  app: () => System.import("@orgName/demo-nav"),
  activeWhen: ['/']
});

registerApplication({
  name: "demo-page-one",
  app: () => System.import("@orgName/demo-page-one"),
  activeWhen: isActive.page1
});

registerApplication({
  name: "demo-page-two",
  app: () => System.import("@orgName/demo-page-two"),
  activeWhen: isActive.page2
});

start({
  urlRerouteOnly: true,
});
