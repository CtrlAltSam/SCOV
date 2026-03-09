import { makeWidget } from "../models/widget.js";

export function getWidgets(owner) {
  return [
    makeWidget("Tasks", 8, owner),
    makeWidget("Builds", 3, owner),
    makeWidget("Alerts", 1, owner),
  ];
}
