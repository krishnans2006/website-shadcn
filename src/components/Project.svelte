<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	interface URL {
		name: string,
		url: string
	}

	interface Project {
		name: string,
		summary: string,
		description: string,
		image_url: string,
		code_url: URL | null,
		submission_url: URL | null,
		demo_url: URL | null,
		is_winner: boolean
	}

	export let project: Project;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{project.name}</Card.Title>
		<Card.Description>{project.summary}</Card.Description>
	</Card.Header>
	<Card.Content>
		<img src={project.image_url} alt={project.name} class="w-full" />
	</Card.Content>
	<Card.Footer class="flex-auto flex-wrap gap-2">
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
	</Card.Footer>
</Card.Root>
