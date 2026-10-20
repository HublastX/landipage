<script lang="ts">
	import { reveal } from './reveal';

	const steps = [
		{
			title: 'Imersão',
			description: 'Entendemos o seu negócio, os usuários e o problema real antes de propor qualquer solução.'
		},
		{
			title: 'Design e planejamento',
			description: 'Protótipos, arquitetura e um roadmap claro com escopo, prazos e prioridades.'
		},
		{
			title: 'Desenvolvimento ágil',
			description: 'Entregas curtas e frequentes, com code review, testes e acompanhamento transparente.'
		},
		{
			title: 'Entrega e evolução',
			description: 'Deploy, monitoramento e suporte contínuo para o produto seguir crescendo.'
		}
	];
</script>

<section id="about" use:reveal class="w-full px-6 py-24 flex flex-col items-center">
	<div class="max-w-7xl w-full grid gap-16 lg:grid-cols-2 items-start">
		<div>
			<span data-reveal class="block text-sm font-semibold tracking-wider uppercase text-violet-500 mb-4">
				Sobre nós
			</span>
			<h2 data-reveal class="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
				Uma software house{' '}
				<span class="bg-gradient-to-r from-violet-500 to-indigo-600 bg-clip-text text-transparent">
					nascida da comunidade
				</span>
			</h2>
			<p data-reveal class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
				A Hublast começou como uma comunidade de desenvolvedores construindo projetos juntos. Hoje somos uma
				software house que leva essa mesma cultura de colaboração, código aberto e aprendizado constante para
				os produtos dos nossos clientes.
			</p>
			<p data-reveal class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
				Trabalhamos lado a lado com você, com comunicação direta e foco em entregar valor desde a primeira
				semana.
			</p>
		</div>

		<ol class="grid gap-6">
			{#each steps as step, i}
				<li
					data-reveal
					class="flex gap-5 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
				>
					<span
						class="shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-white font-bold flex items-center justify-center"
					>
						{String(i + 1).padStart(2, '0')}
					</span>
					<div>
						<h3 class="text-lg font-bold mb-1 text-gray-900 dark:text-white">{step.title}</h3>
						<p class="text-gray-600 dark:text-gray-300">{step.description}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>
