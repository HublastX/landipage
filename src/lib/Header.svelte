<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
	import Logo from './Logo.svelte';

	let menuOpen = $state(false);
	let headerRef: HTMLElement;

	const links = [
		{ text: 'Início', route: '#start' },
		{ text: 'Serviços', route: '#services' },
		{ text: 'Sobre', route: '#about' },
		{ text: 'Projetos', route: '#projects' },
		{ text: 'Comunidade', route: '#community' },
		{ text: 'Contato', route: '#contact' }
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

		// O header só aparece quando a intro termina e o hero entra na tela.
		const ctx = gsap.context(() => {
			gsap.set(headerRef, { autoAlpha: 0, yPercent: -100 });
			ScrollTrigger.create({
				trigger: '#start',
				start: 'top 60%',
				onEnter: () => gsap.to(headerRef, { autoAlpha: 1, yPercent: 0, duration: 0.4, ease: 'power2.out' }),
				onLeaveBack: () => {
					menuOpen = false;
					gsap.to(headerRef, { autoAlpha: 0, yPercent: -100, duration: 0.3, ease: 'power2.in' });
				}
			});
		});

		return () => ctx.revert();
	});

	const handleClick = (e: MouseEvent, route: string) => {
		e.preventDefault();
		menuOpen = false;

		const target = document.getElementById(route.replace('#', ''));

		if (target) {
			const headerHeight = headerRef?.clientHeight || 80;
			const position = target.getBoundingClientRect().top + window.scrollY - headerHeight;

			gsap.to(window, {
				duration: 1,
				scrollTo: { y: position, autoKill: true },
				ease: 'power2.out'
			});
		}
	};
</script>

<header
	bind:this={headerRef}
	class="invisible fixed top-0 left-0 z-50 w-full py-4 px-6 flex justify-between items-center bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200/50 dark:border-white/5"
>
	<a href="#start" onclick={(e) => handleClick(e, '#start')} class="flex items-center">
		<Logo class="h-10 text-violet-500" />
		<span class="text-2xl font-extrabold px-3"> Hublast </span>
	</a>

	<button
		class="md:hidden text-3xl"
		onclick={() => (menuOpen = !menuOpen)}
		aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
	>
		{#if menuOpen}
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		{/if}
	</button>

	<nav class="hidden md:flex gap-6 items-center">
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
