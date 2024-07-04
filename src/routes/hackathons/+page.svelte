<script lang="ts">
	import * as Card from "$lib/components/ui/card";

	import type { PageData } from './$types';

	export let data: PageData;

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

	export let projects: Project[] = data.projects;
</script>

{#each projects as project}
	<Card.Root class="w-[350px]">
		<Card.Header>
			<Card.Title>{project.name}</Card.Title>
			<Card.Description>{project.summary}</Card.Description>
		</Card.Header>
		<Card.Content>
			<img src={project.image_url} alt={project.name} />
		</Card.Content>
		<Card.Footer>
			{#if project.code_url}
				<a href="{project.code_url.url}" target="_blank" rel="noopener noreferrer">Code ({project.code_url.name})</a>
			{/if}
			{#if project.submission_url}
				<a href="{project.submission_url.url}" target="_blank" rel="noopener noreferrer">Submission ({project.submission_url.name})</a>
			{/if}
			{#if project.demo_url}
				<a href="{project.demo_url.url}" target="_blank" rel="noopener noreferrer">Demo ({project.demo_url.name})</a>
			{/if}
		</Card.Footer>
	</Card.Root>
{/each}
