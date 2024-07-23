<script lang="ts">
	import '../app.css';

	import { ModeWatcher } from 'mode-watcher';

	import Navbar from '../components/Navbar.svelte';

	import type { LayoutData } from './$types';
	import { Button } from '$lib/components/ui/button';
	import { Github, Linkedin, Mail, Phone } from 'lucide-svelte';

	export let data: LayoutData;

	let mailUrl = "mailto:krishnans2006@gmail.com";
	let telUrl = "tel:7035590131";
</script>

<ModeWatcher />

<div class="flex w-full flex-col">
	<Navbar routes={data.routes}></Navbar>
	<div class="container mx-auto px-4 my-2 flex flex-col">
		<slot></slot>
	</div>
	<div class="w-full min-h-8 flex flex-col items-center justify-center mt-1 mb-3">
		<div class="w-1/2 md:w-1/4 h-1 bg-border rounded-3xl mb-2"></div>
		<div class="flex flex-row gap-1">
			<Button variant="link" size="icon" href={mailUrl}
							target="_blank" rel="noopener noreferrer">
				<Mail class="size-7" />
			</Button>
			<Button variant="link" size="icon" href={telUrl}
							target="_blank" rel="noopener noreferrer">
				<Phone class="size-7" />
			</Button>
			<Button variant="link" size="icon" href="https://github.com/krishnans2006"
							target="_blank"
							rel="noopener noreferrer">
				<Github class="size-7" />
			</Button>
			<Button variant="link" size="icon" href="https://linkedin.com/in/krishnan-shankar"
							target="_blank" rel="noopener noreferrer">
				<Linkedin class="size-7" />
			</Button>
		</div>
	</div>
</div>

<style></style>
