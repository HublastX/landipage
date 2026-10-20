<script lang="ts">
	import { reveal } from './reveal';

	const services = [
		{
			title: 'Sistemas web',
			description: 'Plataformas, SaaS e painéis administrativos sob medida, rápidos, seguros e fáceis de manter.',
			icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
		},
		{
			title: 'Aplicativos mobile',
			description: 'Apps para Android e iOS com foco em experiência do usuário e desempenho.',
			icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
		},
		{
			title: 'APIs e backend',
			description: 'Arquiteturas escaláveis, integrações com terceiros e serviços robustos prontos para crescer.',
			icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'
		},
		{
			title: 'IA e automação',
			description: 'Soluções com LLMs, agentes e automações que economizam tempo e reduzem trabalho manual.',
			icon: 'M13 10V3L4 14h7v7l9-11h-7z'
		},
		{
			title: 'UI/UX design',
			description: 'Interfaces claras e protótipos validados antes de escrever a primeira linha de código.',
			icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
		},
		{
			title: 'Consultoria técnica',
			description: 'Revisão de arquitetura, cloud, DevOps e boas práticas para acelerar o seu time.',
			icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
		}
	];
</script>

<section
	id="services"
	use:reveal
	class="w-full px-6 py-24 bg-gradient-to-b from-neutral-50 dark:from-gray-950 to-transparent flex flex-col items-center"
>
	<div class="max-w-7xl w-full">
		<div class="text-center mb-16">
			<span data-reveal class="block text-sm font-semibold tracking-wider uppercase text-violet-500 mb-4">
				O que fazemos
			</span>
			<h2 data-reveal class="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
				Do conceito ao{' '}
				<span class="bg-gradient-to-r from-violet-500 to-indigo-600 bg-clip-text text-transparent">deploy</span>
			</h2>
			<p data-reveal class="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
				Montamos o time certo para o seu desafio e cuidamos de todas as etapas do produto, para que você
				foque no seu negócio.
			</p>
		</div>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each services as service}
				<div
					data-reveal
					class="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
				>
					<div
						class="w-14 h-14 mb-6 rounded-lg bg-violet-50 dark:bg-gray-700 flex items-center justify-center group-hover:bg-violet-100 dark:group-hover:bg-gray-600 transition-colors duration-300"
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={service.icon} />
						</svg>
					</div>
					<h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
					<p class="text-gray-600 dark:text-gray-300">{service.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
