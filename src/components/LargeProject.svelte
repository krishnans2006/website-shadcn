<script>
	import * as Card from '$lib/components/ui/card';
</script>

<Card.Root class="p-3">
	<Card.Content class="flex flex-row gap-4 items-center p-6">
		<div class="w-1/3">
			<slot name="image"></slot>
		</div>
		<div class="w-2/3">
			<slot name="text"></slot>
		</div>
	</Card.Content>
</Card.Root>
