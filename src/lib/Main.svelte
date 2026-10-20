<script lang="ts">
	import { reveal } from './reveal';
</script>

<section
	id="start"
	use:reveal={{ y: 50, stagger: 0.15, start: 'top 70%' }}
	class="w-full min-h-screen flex flex-col justify-center items-center text-center px-5 md:px-4 pt-24 bg-gradient-to-b from-transparent to-neutral-50 dark:to-gray-950"
>
	<p
		data-reveal
		class="inline-flex items-center gap-2 uppercase tracking-widest text-xs md:text-sm text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-900 rounded-full px-4 py-1.5 mb-6"
	>
		<span class="h-2 w-2 rounded-full bg-violet-500"></span>
		Software house
	</p>

	<h1 data-reveal class="text-4xl md:text-6xl font-extrabold leading-tight mb-6 max-w-4xl">
		Software sob medida para{' '}
		<span class="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
			tirar sua ideia do papel
		</span>
	</h1>

	<p data-reveal class="text-base md:text-lg text-gray-500 dark:text-gray-300 mb-10 max-w-2xl">
		A Hublast projeta, desenvolve e evolui produtos digitais: sistemas web, aplicativos, APIs e soluções com
		inteligência artificial, do primeiro rascunho ao deploy em produção.
	</p>

	<div data-reveal class="flex flex-col sm:flex-row gap-4">
		<a
			href="#contact"
			class="inline-flex items-center justify-center gap-2 bg-indigo-500 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
		>
			Fale com a gente
			<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
			</svg>
		</a>
		<a
			href="#projects"
			class="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 hover:border-violet-500 hover:text-violet-500 font-semibold py-3 px-6 rounded-lg transition duration-200"
		>
			Ver projetos
		</a>
	</div>
</section>
