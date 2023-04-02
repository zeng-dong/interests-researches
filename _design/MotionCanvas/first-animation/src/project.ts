import { makeProject } from "@motion-canvas/core";

import example from "./scenes/example?scene";
import signal from "./scenes/signal?scene";

export default makeProject({
	scenes: [signal],
});
