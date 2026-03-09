import { toTag } from "../utils/format.js";

export function renderWidgetCard(widget) {
  return {
    label: widget.name,
    badge: toTag(widget.count),
    owner: widget.owner,
  };
}
