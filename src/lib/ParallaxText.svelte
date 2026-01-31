<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
	import Logo from './Logo.svelte';

	interface Props {
		onComplete?: () => void;
	}

	let { onComplete }: Props = $props();

	let titleRef0: HTMLSpanElement;
	let titleRef1: HTMLSpanElement;
	let titleRef2: HTMLSpanElement;
	let titleRef3: HTMLSpanElement;
	let titleRef4: HTMLSpanElement;
	let titleRef5: HTMLSpanElement;
	let titleRef6: HTMLSpanElement;
	let containerRef: HTMLDivElement;
	let logoRef: HTMLDivElement;
	let titleContainerRef: HTMLDivElement;
	let scrollIndicatorRef: HTMLDivElement;
	let isScrollingDown = $state(true);

	const titleRef = $derived([titleRef0, titleRef1, titleRef2, titleRef3, titleRef4, titleRef5, titleRef6]);

	const handleScrollClick = () => {
		if (containerRef) {
			isScrollingDown = true;
			const endPosition = window.innerHeight * 2;

			gsap.to(window, {
				scrollTo: endPosition,
				duration: 2,
				ease: 'power2.inOut'
			});
		}
	};

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

		const ctx = gsap.context(() => {
			gsap.to(scrollIndicatorRef, {
				y: 15,
				duration: 1.5,
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut'
			});

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef,
					start: 'top top',
					end: '+=100%',
					scrub: true,
					pin: true,
					onUpdate: (self) => {
						isScrollingDown = self.direction === 1;
					}
				}
			});

			tl.to(titleRef.slice().reverse(), {
				opacity: 0,
				filter: 'blur(10px)',
				width: 0,
				margin: 0,
				stagger: 0.4,
				ease: 'power2.out'
			});

			tl.to(
				logoRef,
				{
					scale: 5,
					rotate: 180,
					duration: 4,
					ease: 'sine.inOut'
				},
				'+=0.2'
			).to(
				logoRef,
				{
					scale: 10,
					rotate: 360,
					opacity: 0,
					filter: 'blur(10px)',
					duration: 4,
					ease: 'sine.inOut',
					onComplete: () => {
						if (isScrollingDown && onComplete) {
							onComplete();
						}
					}
				},
				'-=1.5'
			);
			tl.to(scrollIndicatorRef, { opacity: 0, duration: 0.5 }, '+=0.1');
		}, containerRef);

		return () => ctx.revert();
	});
</script>

<section
	class="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-neutral-50 dark:from-gray-950 to-transparent relative overflow-hidden"
	bind:this={containerRef}
>
	<div class="flex items-center justify-center text-6xl font-extrabold mb-16">
		<div bind:this={logoRef}>
			<Logo class="h-24 w-24 text-violet-500" />
		</div>
		<div bind:this={titleContainerRef} class="flex">
			<span
				bind:this={titleRef0}
				class="text-center text-4xl md:text-6xl font-extrabold leading-tight"
			>H</span>
			<span
				bind:this={titleRef1}
				class="text-center text-4xl md:text-6xl font-extrabold leading-tight"
			>u</span>
			<span
				bind:this={titleRef2}
				class="text-center text-4xl md:text-6xl font-extrabold leading-tight"
			>b</span>
			<span
				bind:this={titleRef3}
				class="text-center text-4xl md:text-6xl font-extrabold leading-tight"
			>l</span>
			<span
				bind:this={titleRef4}
				class="text-center text-4xl md:text-6xl font-extrabold leading-tight"
			>a</span>
			<span
				bind:this={titleRef5}
				class="text-center text-4xl md:text-6xl font-extrabold leading-tight"
			>s</span>
			<span
				bind:this={titleRef6}
				class="text-center text-4xl md:text-6xl font-extrabold leading-tight"
			>t</span>
		</div>
	</div>

	<div
		bind:this={scrollIndicatorRef}
		onclick={handleScrollClick}
		class="absolute bottom-20 flex flex-col items-center text-violet-500 cursor-pointer hover:text-violet-600 transition-colors"
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
		<p class="mt-2 text-sm text-gray-600 dark:text-gray-300 font-medium"> Role ou clique para continuar </p>
	</div>
</section>

