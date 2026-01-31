<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let subtitleRef: HTMLElement;
	let titleRef: HTMLElement;
	let subtitleDescRef: HTMLElement;
	let buttonRef: HTMLElement;

	onMount(() => {
		const elements = [subtitleRef, titleRef, subtitleDescRef, buttonRef];

		gsap.fromTo(
			elements,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power3.out',
				stagger: 0.2
			}
		);
	});
</script>

<section
	id="start"
	class="w-full h-screen flex flex-col justify-center items-center text-center md:px-4 px-5 bg-gradient-to-b from-transparent to-neutral-50 dark:to-gray-950 scroll-smooth"
>
	<p
		bind:this={subtitleRef}
		class="opacity-0 uppercase tracking-widest text-sm md:text-base dark:text-gray-400 text-gray-500 mb-4"
	>
		a comunidade que acredita no seu potencial
	</p>

	<h1
		bind:this={titleRef}
		class="opacity-0 text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-center"
	>
		Sua{' '}
		<span class="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
			jornada dev
		</span>{' '}
		<br />
		começa com{' '}
		<span class="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
			apoio e prática
		</span>
	</h1>

	<p
		bind:this={subtitleDescRef}
		class="opacity-0 text-md md:text-lg dark:text-gray-300 text-gray-400 mb-8 max-w-xl"
	>
		Aprenda, colabore e ganhe experiência com projetos reais.
	</p>

	<a
		bind:this={buttonRef}
		href="https://discord.gg/uXPXZdkqkf"
		target="_blank"
		aria-label="Entrar na Comunidade no Discord"
		rel="noopener noreferrer"
		class="opacity-0 z-0 inline-flex items-center gap-2 bg-indigo-500 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="currentColor"
		>
			<path
				d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"
			/>
		</svg>
		Entrar na Comunidade
	</a>
</section>

