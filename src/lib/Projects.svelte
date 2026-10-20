<script lang="ts">
	import { reveal } from './reveal';

	interface Project {
		title: string;
		description: string;
		tags: string[];
		link: string;
		deploy?: string;
	}

	const projects: Project[] = [
		{
			title: 'Commit-IA',
			description:
				'Ferramenta de linha de comando que usa LLMs para analisar suas alterações no Git e gerar automaticamente mensagens de commit semânticas.',
			tags: ['Go', 'CLI', 'IA'],
			link: 'https://github.com/HublastX/Commit-IA'
		},
		{
			title: 'Book-Guardian',
			description:
				'Gerenciador de bibliotecas pessoais que ajuda os amantes da leitura a organizar seus livros de forma simples e eficiente.',
			tags: ['Web'],
			link: 'https://github.com/HublastX/Book-Guardian',
			deploy: 'https://book-guardian-production.up.railway.app/'
		},
		{
			title: 'Beefleet',
			description:
				'Sistema de gestão de frotas onde o gestor cadastra veículos e motoristas e controla os empréstimos de cada veículo.',
			tags: ['Web', 'Gestão'],
			link: 'https://github.com/HublastX/beefleet',
			deploy: 'https://hublast.com/beefleet'
		},
		{
			title: 'ValidGen',
			description:
				'Biblioteca Go para gerar, validar e formatar dados estruturados como CPF, CNPJ e outros identificadores, com uma API simples e eficiente.',
			tags: ['Go', 'Biblioteca'],
			link: 'https://github.com/HublastX/ValidGen'
		}
	];

	const githubIcon =
		'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z';
</script>

<section
	id="projects"
	use:reveal
	class="w-full px-6 py-24 bg-gradient-to-b from-transparent to-neutral-50 dark:to-gray-950 flex flex-col items-center"
>
	<div class="text-center mb-16">
		<span data-reveal class="block text-sm font-semibold tracking-wider uppercase text-violet-500 mb-4">
			Portfólio
		</span>
		<h2 data-reveal class="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
			Feito pela{' '}
			<span class="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">Hublast</span>
		</h2>
		<p data-reveal class="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
			Produtos e ferramentas open source desenvolvidos pelo nosso time junto com a comunidade.
		</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
		{#each projects as project}
			<div
				data-reveal
				class="flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg p-8 rounded-2xl hover:shadow-2xl transition-shadow duration-300"
			>
				<div class="flex items-center justify-between mb-4">
					<h3 class="text-2xl font-bold dark:text-violet-400 text-violet-600">{project.title}</h3>
					{#if project.deploy}
						<span
							class="bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 text-xs px-3 py-1 rounded-full font-semibold"
						>
							Online
						</span>
					{/if}
				</div>
				<p class="text-gray-600 dark:text-gray-300 mb-6 grow">{project.description}</p>
				<div class="flex flex-wrap gap-2 mb-6">
					{#each project.tags as tag}
						<span class="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
							{tag}
						</span>
					{/each}
				</div>
				<div class="flex gap-6">
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center dark:text-violet-400 text-violet-600 hover:underline font-medium"
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
							<path d={githubIcon} />
						</svg>
						GitHub
					</a>
					{#if project.deploy}
						<a
							href={project.deploy}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center dark:text-indigo-300 text-indigo-600 hover:underline font-medium"
						>
							Site
							<svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
						</a>
					{/if}
				</div>
			</div>
		{/each}
	</div>

	<a
		href="https://github.com/HublastX"
		target="_blank"
		rel="noopener noreferrer"
		class="mt-12 text-violet-600 dark:text-violet-400 hover:underline font-medium text-lg"
	>
		Veja todos os projetos no GitHub
	</a>
</section>
