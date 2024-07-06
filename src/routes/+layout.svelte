<script lang="ts">
	import '../app.css';

	import { ModeWatcher } from 'mode-watcher';

	import Navbar from '../components/Navbar.svelte';

	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<ModeWatcher />

<div class="flex min-h-screen w-full flex-col h-full">
	<Navbar routes={data.routes}></Navbar>
	<div class="container mx-auto px-4 my-2 grow flex flex-col">
		<slot></slot>
	</div>
</div>

<style></style>
