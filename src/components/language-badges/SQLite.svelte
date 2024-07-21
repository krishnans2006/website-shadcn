<script>
	import LanguageBadge from '../LanguageBadge.svelte';

	import image from '$lib/images/badges/sqlite.png';
	import { Badge } from '$lib/components/ui/badge';
</script>

<LanguageBadge name="SQLite"
							 description="A small, fast, self-contained, high-reliability, full-featured, SQL database engine"
							 url="https://www.sqlite.org"
							 image={image}
>
	<svelte:fragment slot="trigger">
		<Badge class="bg-[#3E9FDC] hover:bg-[#107FCE] text-white">SQLite</Badge>
	</svelte:fragment>
</LanguageBadge>
