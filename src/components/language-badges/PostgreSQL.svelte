<script>
	import LanguageBadge from '../LanguageBadge.svelte';

	import image from '$lib/images/badges/postgresql.png';
	import { Badge } from '$lib/components/ui/badge';
</script>

<LanguageBadge name="PostgreSQL"
							 description="The world's most advanced open source relational database"
							 url="https://www.postgresql.org"
							 image={image}
>
	<svelte:fragment slot="trigger">
		<Badge class="bg-[#326690] hover:bg-[#2c5b81] text-white">PostgreSQL</Badge>
	</svelte:fragment>
</LanguageBadge>
