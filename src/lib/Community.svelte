<script lang="ts">
	import { reveal } from './reveal';

	const benefits = [
		{
			title: 'Estude em grupo',
			description: 'Tire dúvidas, compartilhe materiais e siga trilhas de estudo com outros devs.'
		},
		{
			title: 'Projetos reais',
			description: 'Contribua nos projetos open source da Hublast e aprenda como software é feito de verdade.'
		},
		{
			title: 'Code review e mentoria',
			description: 'Receba feedback de devs mais experientes e do time da software house.'
		},
		{
			title: 'Portfólio e networking',
			description: 'Saia com projetos para mostrar e conexões que abrem portas na carreira.'
		}
	];

	const steps = ['Entre no Discord', 'Apresente-se e escolha o que estudar', 'Pegue uma tarefa em um projeto', 'Aprenda com o review e evolua'];
</script>

<section id="community" use:reveal class="w-full px-6 py-24 flex flex-col items-center">
	<div
		class="max-w-7xl w-full rounded-3xl p-8 md:p-14 bg-gradient-to-br from-violet-600 to-indigo-700 text-white shadow-2xl"
	>
		<div class="grid gap-12 lg:grid-cols-2">
			<div>
				<span data-reveal class="block text-sm font-semibold tracking-wider uppercase text-violet-200 mb-4">
					Hublast Comunidade
				</span>
				<h2 data-reveal class="text-4xl md:text-5xl font-bold tracking-tight mb-6">
					Um lugar para aprender na prática
				</h2>
				<p data-reveal class="text-lg text-violet-100 leading-relaxed mb-6">
					Além da software house, mantemos a Hublast Comunidade: um espaço aberto onde estudantes e pessoas
					em início de carreira entram para estudar, tirar dúvidas e ganhar experiência contribuindo nos
					nossos projetos.
				</p>
				<p data-reveal class="text-lg text-violet-100 leading-relaxed mb-8">
					Foi assim que a Hublast nasceu, e é assim que continuamos formando novos desenvolvedores.
				</p>

				<ol data-reveal class="grid gap-3 mb-10">
					{#each steps as step, i}
						<li class="flex items-center gap-3">
							<span class="shrink-0 w-7 h-7 rounded-full bg-white/15 text-sm font-bold flex items-center justify-center">
								{i + 1}
							</span>
							<span class="text-violet-50">{step}</span>
						</li>
					{/each}
				</ol>

				<a
					data-reveal
					href="https://discord.gg/uXPXZdkqkf"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 bg-white text-indigo-700 hover:bg-violet-50 font-semibold py-3 px-6 rounded-lg transition duration-200"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
						<path
							d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"
						/>
					</svg>
					Entrar na Comunidade
				</a>
			</div>

			<div class="grid gap-5 sm:grid-cols-2 content-center">
				{#each benefits as benefit}
					<div data-reveal class="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-6">
						<h3 class="text-lg font-bold mb-2">{benefit.title}</h3>
						<p class="text-violet-100">{benefit.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
