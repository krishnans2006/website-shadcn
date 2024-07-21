<script>
	import LanguageBadge from '../LanguageBadge.svelte';

	import image from '$lib/images/badges/react.png';
	import { Badge } from '$lib/components/ui/badge';
</script>

<LanguageBadge name="React"
							 description="The library for web and native user interfaces"
							 url="https://react.dev"
							 image={image}
>
	<svelte:fragment slot="trigger">
		<Badge class="bg-[#61DBFB] hover:bg-[#3fd3fa] text-black">React</Badge>
	</svelte:fragment>
</LanguageBadge>
