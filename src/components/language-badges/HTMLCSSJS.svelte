<script>
	import LanguageBadge from '../LanguageBadge.svelte';

	import image from '$lib/images/badges/htmlcssjs.png';
	import { Badge } from '$lib/components/ui/badge';
</script>

<LanguageBadge name="HTML/CSS/JS"
							 description="The standard markup, styling, and scripting languages for web development"
							 url="https://en.wikipedia.org/wiki/HTML"
							 image={image}
>
	<svelte:fragment slot="trigger">
		<Badge class="bg-[#EF662A] hover:bg-[#E34E26] text-white">HTML/CSS/JS</Badge>
	</svelte:fragment>
</LanguageBadge>
