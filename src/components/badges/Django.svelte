<script>
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import * as HoverCard from '$lib/components/ui/hover-card';

	import { ExternalLink } from 'lucide-svelte';
</script>

<HoverCard.Root>
	<HoverCard.Trigger>
		<Badge class="bg-[#0C4C32] hover:bg-[#103E2E] text-white">Django</Badge>
	</HoverCard.Trigger>
	<HoverCard.Content class="w-80">
		<a class="flex flex-row justify-between space-x-4" href="https://www.djangoproject.com"
			 target="_blank" rel="noopener noreferrer">
			<Avatar.Root>
				<Avatar.Image src="https://www.svgrepo.com/show/353657/django-icon.svg"
											alt="Django Logo" />
				<Avatar.Fallback>R</Avatar.Fallback>
			</Avatar.Root>
			<div class="space-y-1">
				<div class="flex">
					<h4 class="text-sm font-semibold">Django</h4>
					<ExternalLink class="size-4 ml-2" />
				</div>
				<p class="text-sm">Django makes it easier to build better web apps more quickly and with
					less code</p>
			</div>
		</a>
	</HoverCard.Content>
</HoverCard.Root>
