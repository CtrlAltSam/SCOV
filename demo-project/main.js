import { initDashboard } from "./app.js";
import { formatTitle } from "./utils/format.js";

const title = formatTitle("scov demo project");

initDashboard({
  title,
  owner: "Demo Team",
});
