<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ParallaxText from '$lib/ParallaxText.svelte';
	import Header from '$lib/Header.svelte';
	import Main from '$lib/Main.svelte';
	import About from '$lib/About.svelte';
	import Projects from '$lib/Projects.svelte';
	import Footer from '$lib/Footer.svelte';

	let mainRef: HTMLElement;

	const handleParallaxComplete = () => {
		if (mainRef) {
			gsap.set(mainRef, {
				scale: 0.1,
				opacity: 0,
				transformOrigin: 'center center'
			});
			gsap.to(mainRef, {
				scale: 1,
				opacity: 1,
				duration: 1.5,
				ease: 'power3.out',
				onComplete: () => {
					mainRef?.scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					});
				}
			});
		}
	};
</script>

<ParallaxText onComplete={handleParallaxComplete} />
<main
	bind:this={mainRef}
	class="flex flex-col items-center min-h-screen scroll-smooth opacity-0"
>
	<Header />
	<Main />
	<About />
	<Projects />
</main>
<Footer />

