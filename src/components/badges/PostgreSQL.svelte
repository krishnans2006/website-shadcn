<script>
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import * as HoverCard from '$lib/components/ui/hover-card';

	import { ExternalLink } from 'lucide-svelte';
</script>

<HoverCard.Root>
	<HoverCard.Trigger>
		<Badge class="bg-[#326690] hover:bg-[#2c5b81] text-white">PostgreSQL</Badge>
	</HoverCard.Trigger>
	<HoverCard.Content class="w-80">
		<a class="flex flex-row justify-between space-x-4" href="https://www.postgresql.org"
			 target="_blank" rel="noopener noreferrer">
			<Avatar.Root>
				<Avatar.Image
					src="https://i.pinimg.com/originals/06/86/c0/0686c0c85407548ea5bd737a572974b6.png"
					alt="PostgreSQL Logo" />
				<Avatar.Fallback>R</Avatar.Fallback>
			</Avatar.Root>
			<div class="space-y-1">
				<div class="flex">
					<h4 class="text-sm font-semibold">PostgreSQL</h4>
					<ExternalLink class="size-4 ml-2" />
				</div>
				<p class="text-sm">The world's most advanced open source relational database</p>
			</div>
		</a>
	</HoverCard.Content>
</HoverCard.Root>
