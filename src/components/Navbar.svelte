<script lang="ts">
	import { Sun, Moon, Package2, CircleUser, Menu } from 'lucide-svelte';

	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';

	import { toggleMode } from 'mode-watcher';
	import { page } from '$app/stores';

	interface Route {
		name: string;
		href: string;
	}

	export let routes: Route[] = [];
</script>

<header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
	<nav
		class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
	>
		<a href="/" class="flex items-center gap-2 text-lg font-semibold">
			<Package2 class="h-6 w-6" />
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
					<Package2 class="h-6 w-6" />
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
		<Button on:click={toggleMode} variant="outline" size="icon"
						class="ml-auto flex-initial">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>

		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button
					builders={[builder]}
					variant="secondary"
					size="icon"
					class="rounded-full"
				>
					<CircleUser class="h-5 w-5" />
					<span class="sr-only">Toggle user menu</span>
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content align="end">
				<DropdownMenu.Label>My Account</DropdownMenu.Label>
				<DropdownMenu.Separator />
				<DropdownMenu.Item>Settings</DropdownMenu.Item>
				<DropdownMenu.Item>Support</DropdownMenu.Item>
				<DropdownMenu.Separator />
				<DropdownMenu.Item>Logout</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
</header>
