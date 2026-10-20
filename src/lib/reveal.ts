import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface RevealOptions {
	y?: number;
	stagger?: number;
	start?: string;
}

// Anima os filhos marcados com [data-reveal] quando o nó entra na tela.
export function reveal(node: HTMLElement, { y = 40, stagger = 0.12, start = 'top 80%' }: RevealOptions = {}) {
	gsap.registerPlugin(ScrollTrigger);

	const targets = node.querySelectorAll('[data-reveal]');

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		gsap.set(targets, { autoAlpha: 1 });
		return {};
	}

	const ctx = gsap.context(() => {
		gsap.fromTo(
			targets,
			{ autoAlpha: 0, y },
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.9,
				ease: 'power3.out',
				stagger,
				scrollTrigger: { trigger: node, start, once: true }
			}
		);
	}, node);

	return { destroy: () => ctx.revert() };
}
