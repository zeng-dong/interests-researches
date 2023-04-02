import { makeScene2D } from "@motion-canvas/2d";
import { Txt } from "@motion-canvas/2d/lib/components";
import { createSignal } from "@motion-canvas/core/lib/signals";

export default makeScene2D(function* (view) {
	const radius = createSignal(3);
	const area = createSignal(() => Math.PI * radius() * radius());

	view.add(
		<>
			<Txt text={() => `A = ${area().toFixed(2)}`} />
		</>
	);
});
