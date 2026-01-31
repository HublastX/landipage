<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
	import Logo from './Logo.svelte';

	let menuOpen = $state(false);

	onMount(() => {
		gsap.registerPlugin(ScrollToPlugin);
	});

	const links = [
		{ text: 'Início', route: '#start' },
		{ text: 'Sobre', route: '#about' },
		{ text: 'Projetos', route: '#projects' }
	];

	const handleClick = (e: MouseEvent, route: string) => {
		e.preventDefault();
		menuOpen = false;

		const id = route.replace('#', '');
		const target = document.getElementById(id);

		if (target) {
			const headerHeight = document.querySelector('header')?.clientHeight || 80;
			const position = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

			gsap.to(window, {
				duration: 1,
				scrollTo: { y: position, autoKill: true },
				ease: 'power2.out'
			});
		}
	};
</script>

<header class="fixed z-50 w-full py-4 px-6 flex justify-between items-center bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-white/10 dark:border-none">
	<div class="flex items-center">
		<Logo class="h-12 text-violet-500" />
		<h1 class="text-2xl font-extrabold px-3 py-2 rounded"> Hublast </h1>
	</div>

	<button
		class="md:hidden text-3xl"
		onclick={() => (menuOpen = !menuOpen)}
		aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
	>
		{#if menuOpen}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		{/if}
	</button>

	<nav class="hidden md:flex gap-6 items-center px-3 py-2 rounded">
		{#each links as { text, route }}
			<a
				href={route}
				onclick={(e) => handleClick(e, route)}
				class="hover:text-violet-500 transition-colors duration-200 font-medium"
			>
				{text}
			</a>
		{/each}
	</nav>

	{#if menuOpen}
		<div
			class="absolute top-20 right-6 md:hidden flex flex-col gap-4 px-6 py-4 rounded-lg shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
		>
			{#each links as { text, route }}
				<a
					href={route}
					onclick={(e) => handleClick(e, route)}
					class="text-gray-700 dark:text-gray-200 hover:text-violet-600 transition-colors duration-200 font-medium"
				>
					{text}
				</a>
			{/each}
		</div>
	{/if}
</header>

