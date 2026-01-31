<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	let projectRef0: HTMLDivElement;
	let projectRef1: HTMLDivElement;
	let projectRef2: HTMLDivElement;
	let projectRef3: HTMLDivElement;

	const projectsRef = $derived([projectRef0, projectRef1, projectRef2, projectRef3].filter(Boolean));

	const projects = [
		{
			title: 'Commit-IA',
			description:
				'Commit-IA é uma ferramenta de linha de comando criada em Go que utiliza Large Language Models (LLMs) para analisar suas alterações no código Git e gerar automaticamente mensagens de confirmação semântica.',
			link: 'https://github.com/HublastX/Commit-IA'
		},
		{
			title: 'Book-Guardian',
			description:
				'Projeto BookGuardian criado com a função de gerencia livros , que visa auxiliar os amantes da leitura a gerenciar suas bibliotecas pessoais de maneira eficiente e organizada.',
			link: 'https://github.com/HublastX/Book-Guardian',
			depoly: 'https://book-guardian-production.up.railway.app/'
		},
		{
			title: 'Beefleet',
			description:
				'O beefleet é um projeto de gerenciamento de frota de veículos, onde um gestor pode adicionar, editar e carcar emprestimos de veiculoas para motoristas cadastrados.',
			link: 'https://github.com/HublastX/beefleet',
			depoly: 'https://hublast.com/beefleet'
		},
		{
			title: 'Validgen',
			description:
				'Valigen é uma biblioteca Go para gerar e validar diversos tipos de dados estruturados, como CPF, CNPJ e outros identificadores formatados. Ela fornece uma API eficiente e fácil de usar para lidar com validação, formatação e geração de dados.',
			link: 'https://github.com/HublastX/ValidGen'
		}
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const animation = gsap.fromTo(
			projectsRef,
			{ opacity: 0, x: -50 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				ease: 'power3.out',
				stagger: 0.2,
				scrollTrigger: {
					trigger: '#projects',
					start: 'top 80%'
				}
			}
		);

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			animation.kill();
		};
	});
</script>

<section
	id="projects"
	class="w-full px-6 py-20 bg-gradient-to-b from-transparent  to-neutral-50 dark:to-gray-950 text-left flex flex-col items-center scroll-smooth"
>
	<h2 class="text-3xl md:text-4xl font-semibold mb-16 text-gray-900 dark:text-white text-center">
		Últimos{' '}
		<span class="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent font-bold">
			Projetos
		</span>
	</h2>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
		<div
			bind:this={projectRef0}
			class="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg p-8 rounded-2xl opacity-0 hover:shadow-2xl transition-all duration-300 group"
		>
			<div class="flex items-center justify-between mb-4">
				<h3 class="text-2xl font-bold dark:text-violet-400 text-violet-600">{projects[0].title}</h3>
			</div>
			<p class="text-gray-600 dark:text-gray-300 mb-6">{projects[0].description}</p>
			<div class="flex gap-6">
				<a
					href={projects[0].link}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center dark:text-violet-400 text-violet-600 hover:underline font-medium transition-colors"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 mr-2"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
					GitHub
				</a>
			</div>
		</div>
		<div
			bind:this={projectRef1}
			class="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg p-8 rounded-2xl opacity-0 hover:shadow-2xl transition-all duration-300 group"
		>
			<div class="flex items-center justify-between mb-4">
				<h3 class="text-2xl font-bold dark:text-violet-400 text-violet-600">{projects[1].title}</h3>
				<span
					class="bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 text-xs px-3 py-1 rounded-full font-semibold"
				>
					Online
				</span>
			</div>
			<p class="text-gray-600 dark:text-gray-300 mb-6">{projects[1].description}</p>
			<div class="flex gap-6">
				<a
					href={projects[1].link}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center dark:text-violet-400 text-violet-600 hover:underline font-medium transition-colors"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 mr-2"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
					GitHub
				</a>
				<a
					href={projects[1].depoly}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center dark:text-indigo-300 text-indigo-600 hover:underline font-medium transition-colors"
				>
					Site
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-3.5 w-3.5 ml-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
						/>
					</svg>
				</a>
			</div>
		</div>
		<div
			bind:this={projectRef2}
			class="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg p-8 rounded-2xl opacity-0 hover:shadow-2xl transition-all duration-300 group"
		>
			<div class="flex items-center justify-between mb-4">
				<h3 class="text-2xl font-bold dark:text-violet-400 text-violet-600">{projects[2].title}</h3>
				<span
					class="bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 text-xs px-3 py-1 rounded-full font-semibold"
				>
					Online
				</span>
			</div>
			<p class="text-gray-600 dark:text-gray-300 mb-6">{projects[2].description}</p>
			<div class="flex gap-6">
				<a
					href={projects[2].link}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center dark:text-violet-400 text-violet-600 hover:underline font-medium transition-colors"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 mr-2"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
					GitHub
				</a>
				<a
					href={projects[2].depoly}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center dark:text-indigo-300 text-indigo-600 hover:underline font-medium transition-colors"
				>
					Site
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-3.5 w-3.5 ml-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
						/>
					</svg>
				</a>
			</div>
		</div>
		<div
			bind:this={projectRef3}
			class="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg p-8 rounded-2xl opacity-0 hover:shadow-2xl transition-all duration-300 group"
		>
			<div class="flex items-center justify-between mb-4">
				<h3 class="text-2xl font-bold dark:text-violet-400 text-violet-600">{projects[3].title}</h3>
			</div>
			<p class="text-gray-600 dark:text-gray-300 mb-6">{projects[3].description}</p>
			<div class="flex gap-6">
				<a
					href={projects[3].link}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center dark:text-violet-400 text-violet-600 hover:underline font-medium transition-colors"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 mr-2"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
					GitHub
				</a>
			</div>
		</div>
	</div>

	<a
		href="/landing"
		class="mt-12 text-violet-600 dark:text-violet-400 hover:underline font-medium text-lg"
	>
		Veja todos os nossos projetos
	</a>
</section>

