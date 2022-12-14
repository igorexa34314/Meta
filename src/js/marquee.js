export function SetMarquee() {
	const root = document.documentElement;
	const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elements-displayed');
	const marqueeContents = document.querySelectorAll('.marquee-content');

	for (const marqueeContent of marqueeContents) {
		root.style.setProperty("--marquee-elements", marqueeContent.children.length);
		for (let i = 0; i < marqueeElementsDisplayed; i++) {
			marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
		}
	}
}
