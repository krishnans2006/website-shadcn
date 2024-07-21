<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	import type { Project as ProjectType } from '../../data/projects';

	export let project: ProjectType;

	export let mediaFolder = 'hobby';
</script>

<div class="animate-fade-up delay-1000">
	<Card.Root class="transition-transform delay-75 duration-300 ease-in-out hover:scale-105">
		<Card.Header class="flex flex-col items-center">
			{#await import(`$lib/images/${mediaFolder}/${project.image}.png`) then { default: src }}
				<img src={src} alt="{project.name}" class="object-fill size-12 rounded-full mb-2"
						 class:dark:invert={project.image_invert_dark} />
			{/await}
			<div class="w-4/5">
				<Card.Title class="text-center">{project.name}</Card.Title>
				<Card.Description class="text-center">{project.summary}</Card.Description>
			</div>
		</Card.Header>
		<Card.Footer class="flex-auto flex-wrap gap-2 justify-center">
			{#if project.code_url}
				<Button variant="secondary" href="{project.code_url.url}" target="_blank"
								rel="noopener noreferrer">Code ({project.code_url.name})
				</Button>
			{/if}
			{#if project.submission_url}
				<Button variant="secondary" href="{project.submission_url.url}" target="_blank"
								rel="noopener noreferrer">Submission ({project.submission_url.name})
				</Button>
			{/if}
			{#if project.demo_url}
				<Button variant="secondary" href="{project.demo_url.url}" target="_blank"
								rel="noopener noreferrer">Demo ({project.demo_url.name})
				</Button>
			{/if}
			{#if project.invite_url}
				<Button variant="secondary" href="{project.invite_url.url}" target="_blank"
								rel="noopener noreferrer">Invite ({project.invite_url.name})
				</Button>
			{/if}
		</Card.Footer>
	</Card.Root>
</div>
