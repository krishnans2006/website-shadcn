<script>
	import LanguageBadge from '../LanguageBadge.svelte';

	import image from '$lib/images/badges/flask.png';
	import { Badge } from '$lib/components/ui/badge';
</script>

<LanguageBadge name="Flask"
							 description="The Python micro framework for building web applications"
							 url="https://flask.palletsprojects.com"
							 image={image}
>
	<svelte:fragment slot="trigger">
		<Badge class="bg-[#3BABC3] hover:bg-[#3599af] text-inherit">Flask</Badge>
	</svelte:fragment>
</LanguageBadge>
