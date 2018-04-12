// Source → https://github.com/sindresorhus/refined-github/blob/4d0fff7c04fb5f221675ac7ea0baff56b462e0ad/source/libs/simplified-element-observer.js
export default const observeEl = (el, listener, options = {
		childList: true
	}) => {
	if (typeof el === 'string') {
		el = document.querySelector(el);
	}

	if (!el) {
		return;
	}

	// Run first
	listener([]);

	// Run on updates
	const observer = new MutationObserver(listener);
	observer.observe(el, options);
	return observer;

}
