<script lang="ts">
	import Masonry from 'svelte-bricks';

	import HobbyProject from '../../components/project-layouts/HobbyProject.svelte';

	import type { PageData } from './$types';
	import type { Project as ProjectType } from '../../data/projects';

	export let data: PageData;

	let projects: ProjectType[] = data.projects;

	projects = projects
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

	let [minColWidth, maxColWidth, gap] = [300, 500, 12];
</script>

<svelte:head>
	<title>Krishnan Shankar - Hackathons</title>
</svelte:head>

<div class="my-6">
	<h1 class="text-4xl font-bold text-center">My Hobby Projects</h1>
	<h4 class="text-lg text-center">Stuff I built just for fun.</h4>
</div>

<Masonry items={projects} {minColWidth} {maxColWidth} {gap} let:item={project} idKey="name">
	<HobbyProject {project} />
</Masonry>
