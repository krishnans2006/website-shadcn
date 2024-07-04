<script lang="ts">
  import Masonry from 'svelte-bricks'

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

	console.log(projects);

	let [minColWidth, maxColWidth, gap] = [200, 800, 8];
</script>

<Masonry items={projects} {minColWidth} {maxColWidth} {gap} let:item={project} idKey="name">
	<Project {project} />
</Masonry>
