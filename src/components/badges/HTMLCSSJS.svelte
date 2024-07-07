<script>
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import * as HoverCard from '$lib/components/ui/hover-card';

	import { ExternalLink } from 'lucide-svelte';
</script>

<HoverCard.Root>
	<HoverCard.Trigger>
		<Badge class="bg-[#EF662A] hover:bg-[#E34E26] text-white">HTML/CSS/JS</Badge>
	</HoverCard.Trigger>
	<HoverCard.Content class="w-80">
		<a class="flex flex-row justify-between space-x-4" href="https://en.wikipedia.org/wiki/HTML"
			 target="_blank" rel="noopener noreferrer">
			<Avatar.Root>
				<Avatar.Image src="https://icons.veryicon.com/png/System/Plex/Other%20html%205.png"
											alt="HTML Logo" />
				<Avatar.Fallback>R</Avatar.Fallback>
			</Avatar.Root>
			<div class="space-y-1">
				<div class="flex">
					<h4 class="text-sm font-semibold">HTML, CSS, and JavaScript</h4>
					<ExternalLink class="size-4 ml-2" />
				</div>
				<p class="text-sm">The standard markup, styling, and scripting languages for
					web development</p>
			</div>
		</a>
	</HoverCard.Content>
</HoverCard.Root>
