<script lang="ts">
	import '../app.css';

	import { ModeWatcher } from 'mode-watcher';

	import Navbar from '../components/Navbar.svelte';

	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<ModeWatcher />

<div class="flex min-h-screen w-full flex-col">
	<Navbar routes={data.routes}></Navbar>
	<slot></slot>
</div>

<style></style>
