<script>
	import * as Avatar from '$lib/components/ui/avatar';
	import * as HoverCard from '$lib/components/ui/hover-card';

	import { ExternalLink } from 'lucide-svelte';

	export let name = '';
	export let description = '';
	export let url = '';
	export let image = '';
</script>

<HoverCard.Root>
	<HoverCard.Trigger>
		<slot name="trigger"></slot>
	</HoverCard.Trigger>
	<HoverCard.Content class="w-80">
		<a class="flex flex-row justify-between space-x-4" href="{url}"
			 target="_blank" rel="noopener noreferrer">
			<Avatar.Root>
				<Avatar.Image src="{image}"
											alt="{name} Logo" />
				<Avatar.Fallback>.</Avatar.Fallback>
			</Avatar.Root>
			<div class="space-y-1">
				<div class="flex">
					<h4 class="text-sm font-semibold">{name}</h4>
					<ExternalLink class="size-4 ml-2" />
				</div>
				<p class="text-sm">{description}</p>
			</div>
		</a>
	</HoverCard.Content>
</HoverCard.Root>
