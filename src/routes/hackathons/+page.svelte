<script lang="ts">
	import Masonry from 'svelte-bricks';

	import HackathonProject from '../../components/project-layouts/HackathonProject.svelte';

	import type { PageData } from './$types';
	import type { Project as ProjectType } from '../../data/projects';

	export let data: PageData;

	let projects: ProjectType[] = data.projects;

	let [minColWidth, maxColWidth, gap] = [350, 600, 12];
</script>

<svelte:head>
	<title>Krishnan Shankar - Hackathons</title>
</svelte:head>

<div class="my-6">
	<h1 class="text-4xl font-bold text-center">My Hackathon Projects</h1>
	<h4 class="text-lg text-center">Most of these were developed, with a team, in just one weekend.</h4>
</div>

<Masonry items={projects} {minColWidth} {maxColWidth} {gap} let:item={project} idKey="name">
	<HackathonProject {project} />
</Masonry>
