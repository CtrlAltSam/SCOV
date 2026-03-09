import { renderWidgetCard } from "../render/widgetCard.js";

export function mountWidgets(title, widgets) {
  const cards = widgets.map((widget) => renderWidgetCard(widget));
  return {
    title,
    cards,
  };
}
