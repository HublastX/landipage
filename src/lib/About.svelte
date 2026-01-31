<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	let cardRef0: HTMLDivElement;
	let cardRef1: HTMLDivElement;
	let cardRef2: HTMLDivElement;
	let sectionRef: HTMLDivElement;
	let headingRef: HTMLHeadingElement;

	const cardsRef = $derived([cardRef0, cardRef1, cardRef2].filter(Boolean));

	const cards = [
		{
			icon: 'users',
			title: 'Comunidade colaborativa',
			description:
				'Conecte-se com desenvolvedores de todos os níveis para trocar conhecimento, resolver desafios e crescer juntos.'
		},
		{
			icon: 'project',
			title: 'Experiência prática',
			description:
				'Colabore em projetos reais com squads multidisciplinares e construa portfólio com cases relevantes.'
		},
		{
			icon: 'lightbulb',
			title: 'Acelere seu crescimento',
			description:
				'Mentorias personalizadas e roadmap claro para você avançar na carreira com direção e confiança.'
		}
	];

	const iconMap: Record<string, string> = {
		users: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
		project:
			'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
		lightbulb:
			'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
	};

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (sectionRef && headingRef) {
			gsap.fromTo(
				headingRef,
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: sectionRef,
						start: 'top 85%'
					}
				}
			);

			gsap.fromTo(
				cardsRef,
				{ opacity: 0, y: 40, scale: 0.95 },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 1,
					stagger: 0.2,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: sectionRef,
						start: 'top 75%'
					}
				}
			);
		}
	});
</script>

<section
	id="about"
	bind:this={sectionRef}
	class="w-full px-6 py-20 bg-gradient-to-b from-neutral-50 dark:from-gray-950 to-transparent text-left flex flex-col items-center scroll-smooth"
>
	<div class="max-w-7xl mx-auto relative">
		<div class="text-center mb-16">
			<div class="inline-flex items-center justify-center mb-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 text-violet-500 mr-2"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 10V3L4 14h7v7l9-11h-7z"
					/>
				</svg>
				<span class="text-sm font-semibold tracking-wider uppercase text-violet-500"> Sobre Nós </span>
			</div>
			<h2
				bind:this={headingRef}
				class="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
			>
				Transformando ideias em{' '}
				<span class="bg-gradient-to-r from-violet-500 to-indigo-600 bg-clip-text text-transparent">
					realidade
				</span>
			</h2>
			<p class="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
				Somos o ecossistema completo para sua jornada como desenvolvedor. Aqui você encontra desde conexões
				valiosas e projetos reais até conteúdo especializado e aprendizado interativo com IA. Tudo projetado
				para você evoluir na prática, com propósito e o apoio de uma comunidade que impulsiona seu crescimento.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-3">
			<div
				bind:this={cardRef0}
				class="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 opacity-0"
			>
				<div
					class="w-16 h-16 mb-6 rounded-lg bg-violet-50 dark:bg-gray-700 flex items-center justify-center group-hover:bg-violet-100 dark:group-hover:bg-gray-600 transition-colors duration-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-10 w-10 text-violet-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={iconMap[cards[0].icon]} />
					</svg>
				</div>
				<h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">{cards[0].title}</h3>
				<p class="text-gray-600 dark:text-gray-300">{cards[0].description}</p>
			</div>
			<div
				bind:this={cardRef1}
				class="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 opacity-0"
			>
				<div
					class="w-16 h-16 mb-6 rounded-lg bg-violet-50 dark:bg-gray-700 flex items-center justify-center group-hover:bg-violet-100 dark:group-hover:bg-gray-600 transition-colors duration-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-10 w-10 text-violet-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={iconMap[cards[1].icon]} />
					</svg>
				</div>
				<h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">{cards[1].title}</h3>
				<p class="text-gray-600 dark:text-gray-300">{cards[1].description}</p>
			</div>
			<div
				bind:this={cardRef2}
				class="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 opacity-0"
			>
				<div
					class="w-16 h-16 mb-6 rounded-lg bg-violet-50 dark:bg-gray-700 flex items-center justify-center group-hover:bg-violet-100 dark:group-hover:bg-gray-600 transition-colors duration-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-10 w-10 text-violet-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={iconMap[cards[2].icon]} />
					</svg>
				</div>
				<h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">{cards[2].title}</h3>
				<p class="text-gray-600 dark:text-gray-300">{cards[2].description}</p>
			</div>
		</div>
	</div>
</section>

