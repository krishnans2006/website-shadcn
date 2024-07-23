<script lang="ts">
	import '../app.css';

	import { ModeWatcher } from 'mode-watcher';

	import Navbar from '../components/Navbar.svelte';

	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<ModeWatcher />

<div class="flex w-full flex-col">
	<Navbar routes={data.routes}></Navbar>
	<div class="container mx-auto px-4 my-2 flex flex-col">
		<slot></slot>
	</div>
	<div class="w-full min-h-8 flex flex-col items-center justify-center mt-1 mb-3">
		<div class="w-1/2 h-1 bg-border rounded-3xl"></div>
		<p class="text-gray-500 text-sm mt-1">
			Built by Krishnan Shankar with Svelte, SvelteKit, TailwindCSS, and shadcn/ui
		</p>
		<p class="text-gray-500 text-sm">
			See more on GitHub
		</p>
	</div>
</div>

<style></style>
