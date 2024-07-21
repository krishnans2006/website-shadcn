<script>
	import LanguageBadge from '../LanguageBadge.svelte';

	import image from '$lib/images/badges/django.png';
	import { Badge } from '$lib/components/ui/badge';
</script>

<LanguageBadge name="Django"
							 description="Django makes it easier to build better web apps more quickly and with less code"
							 url="https://www.djangoproject.com"
							 image={image}
>
	<svelte:fragment slot="trigger">
		<Badge class="bg-[#0C4C32] hover:bg-[#103E2E] text-white">Django</Badge>
	</svelte:fragment>
</LanguageBadge>
