<script lang="ts">
	import { onMount } from 'svelte';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import ParallaxText from '$lib/ParallaxText.svelte';
	import Header from '$lib/Header.svelte';
	import Main from '$lib/Main.svelte';
	import Services from '$lib/Services.svelte';
	import About from '$lib/About.svelte';
	import Projects from '$lib/Projects.svelte';
	import Community from '$lib/Community.svelte';
	import Contact from '$lib/Contact.svelte';
	import Footer from '$lib/Footer.svelte';

	onMount(() => {
		// Recalcula posições depois que o pin da intro e todas as seções existem.
		ScrollTrigger.refresh();
	});
</script>

<Header />
<ParallaxText />
<main class="flex flex-col items-center">
	<Main />
	<Services />
	<About />
	<Projects />
	<Community />
	<Contact />
</main>
<Footer />
