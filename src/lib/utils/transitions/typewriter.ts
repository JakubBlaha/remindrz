export function typewriter(node, { speed = 1, message = '' }) {
	const valid =
		(node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE) ||
		message.length;

	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	const text = message.length ? message : node.textContent;
	const duration = text.length / (speed * 0.01);

	return {
		duration,
		tick: (t) => {
			const i = Math.trunc(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};
}
