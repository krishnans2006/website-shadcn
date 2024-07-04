<script lang="ts">
	import Masonry from 'svelte-bricks';

	import Project from '../../components/Project.svelte';

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

	let [minColWidth, maxColWidth, gap] = [350, 600, 12];
</script>

<div class="my-6">
	<h1 class="text-4xl font-bold text-center">My Hackathon Projects</h1>
	<h4 class="text-lg text-center">Most of these were developed, with a team, in the span of a
		weekend.</h4>
</div>

<Masonry items={projects} {minColWidth} {maxColWidth} {gap} let:item={project} idKey="name">
	<Project {project} />
</Masonry>
