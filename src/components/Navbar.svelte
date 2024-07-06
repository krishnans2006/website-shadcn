<script lang="ts">
	import { Sun, Moon, Package2, Menu, ArrowDownToLine } from 'lucide-svelte';

	import { Button } from '$lib/components/ui/button/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';

	import { toggleMode } from 'mode-watcher';
	import { page } from '$app/stores';

	import type { Route as RouteType } from '../data/routes';

	export let routes: RouteType[] = [];
</script>

<header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
	<nav
		class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
	>
		<a href="/" class="flex items-center gap-2 text-lg font-semibold w-40">
			<p>Krishnan Shankar</p>
		</a>
		{#each routes as route}
			<a href={route.href}
				 class:text-foreground={$page.url.pathname === route.href}
				 class:text-muted-foreground={$page.url.pathname !== route.href}
				 class="transition-colors hover:text-foreground">
				{route.name}
			</a>
		{/each}
	</nav>
	<Sheet.Root>
		<Sheet.Trigger asChild let:builder>
			<Button
				variant="outline"
				size="icon"
				class="shrink-0 md:hidden"
				builders={[builder]}
			>
				<Menu class="h-5 w-5" />
				<span class="sr-only">Toggle navigation menu</span>
			</Button>
		</Sheet.Trigger>
		<Sheet.Content side="left">
			<nav class="grid gap-6 text-lg font-medium">
				<a href="/" class="flex items-center gap-2 text-lg font-semibold">
					<p>Krishnan Shankar</p>
				</a>
				{#each routes as route}
					<a href={route.href}
						 class:text-foreground={$page.url.pathname === route.href}
						 class:text-muted-foreground={$page.url.pathname !== route.href}
						 class="transition-colors hover:text-foreground">
						{route.name}
					</a>
				{/each}
			</nav>
		</Sheet.Content>
	</Sheet.Root>
	<div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
		<Button
			variant="secondary"
			href="https://raw.githubusercontent.com/krishnans2006/resume/main/Krishnan_Shankar_Resume.pdf"
			target="_blank"
			rel="noopener noreferrer"
			class="ml-auto"
		>
			<ArrowDownToLine class="mr-2 size-4" />
			Download My Resume
		</Button>

		<Button on:click={toggleMode} variant="outline" size="icon"
						class="flex-initial">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</div>
</header>
