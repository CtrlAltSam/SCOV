import { getWidgets } from "./data/widgets.js";
import { mountWidgets } from "./ui/widgets.js";

export function initDashboard(config) {
  const widgets = getWidgets(config.owner);
  mountWidgets(config.title, widgets);
}
