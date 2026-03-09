export function formatTitle(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function toTag(count) {
  return `${count} item${count === 1 ? "" : "s"}`;
}
