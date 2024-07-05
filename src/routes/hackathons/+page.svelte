<script lang="ts">
	import Masonry from 'svelte-bricks';

	import Project from '../../components/Project.svelte';

	import type { PageData } from './$types';
	import type { Project as ProjectType } from '../../data/hackathons';

	export let data: PageData;

	export let projects: ProjectType[] = data.projects;

	let [minColWidth, maxColWidth, gap] = [350, 600, 12];
</script>

<div class="my-6">
	<h1 class="text-4xl font-bold text-center">My Hackathon Projects</h1>
	<h4 class="text-lg text-center">Most of these were developed, with a team, in just one weekend.</h4>
</div>

<Masonry items={projects} {minColWidth} {maxColWidth} {gap} let:item={project} idKey="name">
	<Project {project} />
</Masonry>
