<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
	import Logo from './Logo.svelte';

	const letters = 'Hublast'.split('');

	let containerRef: HTMLElement;
	let logoRef: HTMLDivElement;
	let titleContainerRef: HTMLDivElement;
	let scrollIndicatorRef: HTMLButtonElement;
	let letterRefs: HTMLSpanElement[] = [];
	let introTrigger: ScrollTrigger | undefined;

	const handleScrollClick = () => {
		gsap.to(window, {
			scrollTo: introTrigger ? introTrigger.end : window.innerHeight * 2,
			duration: 1.6,
			ease: 'power2.inOut'
		});
	};

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

		const mm = gsap.matchMedia();

		mm.add('(prefers-reduced-motion: no-preference)', () => {
			gsap.to(scrollIndicatorRef, {
				y: 12,
				duration: 1.2,
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut'
			});

			const tl = gsap.timeline({
				defaults: { ease: 'none' },
				scrollTrigger: {
					trigger: containerRef,
					start: 'top top',
					end: '+=150%',
					scrub: 0.8,
					pin: true,
					anticipatePin: 1,
					refreshPriority: 1,
					invalidateOnRefresh: true
				}
			});

			introTrigger = tl.scrollTrigger;

			// Só transform/opacity: nada de width/margin, que causava reflow e "tremedeira".
			tl.to(scrollIndicatorRef, { autoAlpha: 0, duration: 0.3 }, 0)
				.to(
					letterRefs.slice().reverse(),
					{ autoAlpha: 0, yPercent: -60, filter: 'blur(8px)', stagger: 0.1, duration: 0.5 },
					0
				)
				// Centraliza o logo deslizando-o por metade da largura do texto.
				.to(logoRef, { x: () => titleContainerRef.offsetWidth / 2, duration: 0.6, ease: 'power1.inOut' }, 0.5)
				.to(logoRef, { scale: 4, rotate: 180, duration: 1, ease: 'power1.in' }, 1.1)
				.to(logoRef, { scale: 9, rotate: 360, autoAlpha: 0, duration: 0.8, ease: 'power2.in' }, 1.7);
		});

		return () => mm.revert();
	});
</script>

<section
	bind:this={containerRef}
	class="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-neutral-50 dark:from-gray-950 to-transparent"
>
	<div class="flex items-center justify-center mb-16">
		<div bind:this={logoRef} class="will-change-transform">
			<Logo class="h-24 w-24 text-violet-500" />
		</div>
		<div bind:this={titleContainerRef} class="flex" aria-label="Hublast">
			{#each letters as letter, i}
				<span
					bind:this={letterRefs[i]}
					aria-hidden="true"
					class="inline-block text-4xl md:text-6xl font-extrabold leading-tight will-change-transform"
				>{letter}</span>
			{/each}
		</div>
	</div>

	<button
		bind:this={scrollIndicatorRef}
		onclick={handleScrollClick}
		class="absolute bottom-20 flex flex-col items-center text-violet-500 cursor-pointer hover:text-violet-600 transition-colors"
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
		<span class="mt-2 text-sm text-gray-600 dark:text-gray-300 font-medium"> Role ou clique para continuar </span>
	</button>
</section>
